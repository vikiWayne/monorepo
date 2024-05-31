import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";
import rebase from "rollup-plugin-rebase";

//NEW
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "esm",
        sourcemap: true,
      },
    ],
    makeAbsoluteExternalsRelative: true,
    plugins: [
      // NEW
      typescript(),
      peerDepsExternal(),

      resolve(),
      commonjs(),

      // NEW
      terser(),
      postcss(),
      url({
        include: ["**/*.png", "**/*.jpg", "**/*.gif", "**/*.jpeg", "**/*.svg"],
        limit: 0, // 0 means copy files to the output dir
        fileName: "[name][hash][extname]",
      }),
      rebase({
        assetFolder: "assets/images",
        keepName: true,
      }),
    ],
  },
  {
    input: "dist/cjs/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.scss$/],
  },
];
