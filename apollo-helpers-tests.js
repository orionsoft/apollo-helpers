// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by apollo-helpers.js.
import { name as packageName } from "meteor/orionsoft:apollo-helpers";

// Write your tests here!
// Here is an example.
Tinytest.add('apollo-helpers - example', function (test) {
  test.equal(packageName, "apollo-helpers");
});
