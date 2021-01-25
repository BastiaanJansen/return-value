import { describe } from "mocha";
import { expect } from "chai";
import { returnValue } from "../src/index";
describe("return value test cases", function () {
    it("should return string value", function () {
        expect(returnValue("hello")).to.equal("hello");
    });
    it("should return number value", function () {
        expect(returnValue(1)).to.equal(1);
    });
});
