var AddToHomeScreen = require("../");

test("function with config equals function without", function() {
  var a2hs1 = AddToHomeScreen({
    brandName: "Test"
  });
  var a2hs2 = AddToHomeScreen();

  expect(a2hs1).toBe(a2hs2);
});
