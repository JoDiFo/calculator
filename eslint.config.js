import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-plugin-prettier";

export default [
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  {
    ignores: ["dist/**/*", "node_modules/**/*"],
  },
  pluginJs.configs.recommended,
];
