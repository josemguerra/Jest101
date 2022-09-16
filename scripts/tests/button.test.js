/**
 * @jest- environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

describe("DOM test", () => {
  test("expects the content to change", () => {
    buttonClick();
    expect((document.getElementById("par").innerHTML = "You Clicked"));
  });
  test("h1 should exists", () => {
    expect(document.getElementsByTagName("h1").length).toBe(1);
  });
});