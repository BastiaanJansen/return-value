import { describe } from "mocha";
import { expect } from "chai";
import { returnValue } from "../src/index";

describe("return value test cases", () => {
	it("should return string value", () => {
		expect(returnValue("hello")).to.equal("hello").and.to.be.a("string");
	});

	it("should return number value", () => {
		expect(returnValue<number>(1)).to.equal(1).and.to.be.a("number");
	});
});
