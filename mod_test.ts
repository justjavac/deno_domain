import {
  assertEquals,
  assert,
} from "https://deno.land/std@0.64.0/testing/asserts.ts";

import {
  isValid,
  getAllDomains,
  getDomainInfo,
} from "./mod.ts";

Deno.test("isValid", (): void => {
  assert(isValid(".com"));
});

Deno.test("getAllDomains should return an array", (): void => {
  assert(Array.isArray(getAllDomains()));
});

Deno.test("getDomainInfo", (): void => {
  assertEquals(getDomainInfo(".zzzzz"), null);
  assertEquals(getDomainInfo(".com"), {
    name: ".com",
    xn: ".com",
    type: "generic",
    manager: "VeriSign Global Registry Services",
  });
});
