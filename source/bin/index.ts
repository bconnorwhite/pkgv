import program from "commander-version";
import { getPackageVersion } from "../";

program(__dirname)
  .name("pkgv")
  .description("Get the version of a project's package.json")
  .action(() => {
    getPackageVersion().then((version: string | undefined) => {
      console.info(version);
    });
  })
  .parse();
