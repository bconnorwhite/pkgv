import { getPackageJSON } from "@bconnorwhite/package";

export async function getPackageVersion() {
  return getPackageJSON().read().then((pkg) => {
    return pkg?.version;
  });
}
