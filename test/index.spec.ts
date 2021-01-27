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

	it("should return a a jojo's reference", () => {
		expect(returnValue("ほう... 向かってくるのか")).to.equal("ほう... 向かってくるのか").and.to.be.a("string");
	});

	it("should return a poop emoji", () => {
		expect(returnValue('💩')).to.equal('💩').and.to.be.a("string");
	});
});
