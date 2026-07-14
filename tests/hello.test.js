import test from "node:test";
import assert from "node:assert/strict";
import { greeting } from "../src/hello.js";

test("returns the default hello world greeting", () => {
  assert.equal(greeting(), "Hello, world!");
});

test("returns a named greeting when a name is provided", () => {
  assert.equal(greeting("Ada"), "Hello, Ada!");
});

test("falls back to world when name is blank", () => {
  assert.equal(greeting(""), "Hello, world!");
  assert.equal(greeting("   "), "Hello, world!");
});

test("returns a Spanish greeting with a name", () => {
  assert.equal(greeting("Ada", "es"), "Hola, Ada!");
});

test("returns a Spanish greeting without a name", () => {
  assert.equal(greeting(undefined, "es"), "Hola, mundo!");
});

test("falls back to English for an unknown language", () => {
  assert.equal(greeting("Ada", "fr"), "Hello, Ada!");
});

test("shouts an English greeting with a name", () => {
  assert.equal(greeting("Ada", undefined, true), "HELLO, ADA!");
});

test("shouts a Spanish greeting with a name", () => {
  assert.equal(greeting("Ada", "es", true), "HOLA, ADA!");
});

test("shouts an English default greeting without a name", () => {
  assert.equal(greeting(undefined, undefined, true), "HELLO, WORLD!");
});

test("shouts a Spanish default greeting without a name", () => {
  assert.equal(greeting(undefined, "es", true), "HOLA, MUNDO!");
});
