import { test, expect, beforeAll, afterAll } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { getPackageVersion } from "../source";

beforeAll(async () => {
  mock({
    [process.cwd()]: {
      "package.json": JSON.stringify({ name: "test", version: "1.0.0" })
    }
  }, {
    createCwd: false
  });
});

afterAll(async () => {
  restore();
});

test("pkgv", async () => {
  const version = await getPackageVersion();
  expect(version).toBe("1.0.0");
});
