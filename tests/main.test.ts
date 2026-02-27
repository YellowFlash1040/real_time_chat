import { test, it, expect } from "vitest";

test("simple test", () => {
  const result: string = "hello world";
  expect(result).eq("hello world");
});
