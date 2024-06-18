import { test, expect } from "vitest";
import { capitalise } from "./capitalise.jsx";

test("capitalise with single lowercase word ", () => {
    expect(capitalise("hello")).toBe("Hello");
});

test("capitalise with empty string ", () => {
    expect(capitalise("")).toBe("");
});

//etc...
