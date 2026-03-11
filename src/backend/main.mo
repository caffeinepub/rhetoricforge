import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type Preferences = {
    style : Style;
    intensityLevel : IntensityLevel;
  };

  type Style = {
    #simple;
    #fluent;
    #eloquent;
  };

  type IntensityLevel = {
    #low;
    #normal;
    #high;
    #extreme;
  };

  let preferences = Map.empty<Principal, Preferences>();

  public shared ({ caller }) func updatePreferences(style : Style, intensityLevel : IntensityLevel) : async () {
    let updatedPreferences : Preferences = {
      style;
      intensityLevel;
    };
    preferences.add(caller, updatedPreferences);
  };

  public query ({ caller }) func getPreferences() : async Preferences {
    switch (preferences.get(caller)) {
      case (null) { { style = #fluent; intensityLevel = #high } };
      case (?preferences) { preferences };
    };
  };
};
