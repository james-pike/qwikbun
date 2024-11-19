import { fileURLToPath } from 'url';
import path from 'path';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import qwikPlugin from 'eslint-plugin-qwik';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      qwik: qwikPlugin,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "prefer-spread": "off",
      "no-case-declarations": "off",
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
    },
  },
  {
    ignores: [
      "**/*.log",
      "**/.DS_Store",
      "*.",
      ".vscode/settings.json",
      ".history",
      ".yarn",
      "bazel-*",
      "bazel-bin",
      "bazel-out",
      "bazel-qwik",
      "bazel-testlogs",
      "dist",
      "dist-dev",
      "lib",
      "lib-types",
      "etc",
      "external",
      "node_modules",
      "temp",
      "tsc-out",
      "tsdoc-metadata.json",
      "target",
      "output",
      "rollup.config.js",
      "build",
      ".cache",
      ".vscode",
      ".rollup.cache",
      "tsconfig.tsbuildinfo",
      "vite.config.ts",
    ],
  },
];
