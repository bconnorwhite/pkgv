#!/usr/bin/env node
import { getPackageJSON } from "@bconnorwhite/package";

getPackageJSON().read().then((pkg) => {
  console.info(pkg?.version);
});
