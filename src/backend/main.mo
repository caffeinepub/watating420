import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Float "mo:core/Float";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type Product = {
    id : Nat;
    name : Text;
    category : Text;
    description : Text;
    priceZAR : Float;
    imageUrl : Text;
    inStock : Bool;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Nat.compare(product1.id, product2.id);
    };

    public func compareByPrice(product1 : Product, product2 : Product) : Order.Order {
      Float.compare(product1.priceZAR, product2.priceZAR);
    };
  };

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  stable var nextProductId = 5;

  let productStore = Map.fromArray<Nat, Product>([
    (
      1,
      {
        id = 1;
        name = "Indoor";
        category = "Indoor";
        description = "Indoor cannabis";
        priceZAR = 50.0;
        imageUrl = "indoor.url";
        inStock = true;
      },
    ),
    (
      2,
      {
        id = 2;
        name = "Outdoor";
        category = "Outdoor";
        description = "Outdoor cannabis";
        priceZAR = 50.0;
        imageUrl = "outdoor.url";
        inStock = true;
      },
    ),
    (
      3,
      {
        id = 3;
        name = "Greenhouse";
        category = "Greenhouse";
        description = "Greenhouse cannabis";
        priceZAR = 50.0;
        imageUrl = "greenhouse.url";
        inStock = true;
      },
    ),
    (
      4,
      {
        id = 4;
        name = "Pre-roll";
        category = "Pre-rolls";
        description = "Pre-rolled cannabis";
        priceZAR = 50.0;
        imageUrl = "preroll.url";
        inStock = true;
      },
    ),
  ]);

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    userProfiles.add(caller, profile);
  };

  public query ({ caller }) func getProduct(id : Nat) : async Product {
    switch (productStore.get(id)) {
      case (null) { Runtime.trap("Product does not exist") };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getProducts() : async [Product] {
    productStore.values().toArray().sort();
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    productStore.values().toArray().filter(func(product) { product.category == category });
  };

  public query ({ caller }) func getCategories() : async [Text] {
    ["Indoor", "Outdoor", "Greenhouse", "Pre-rolls"];
  };

  public shared ({ caller }) func addProduct(product : Product) : async () {
    let newProduct : Product = {
      product with id = nextProductId;
    };
    productStore.add(nextProductId, newProduct);
    nextProductId += 1;
  };

  public shared ({ caller }) func updateProduct(product : Product) : async () {
    if (not productStore.containsKey(product.id)) {
      Runtime.trap("Product does not exist");
    };
    productStore.add(product.id, product);
  };

  public shared ({ caller }) func deleteProduct(id : Nat) : async () {
    if (not productStore.containsKey(id)) {
      Runtime.trap("Product does not exist");
    };
    productStore.remove(id);
  };
};
