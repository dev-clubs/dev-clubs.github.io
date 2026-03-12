

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  staticDirs: [
    { from: "./public", to: "/" }
  ],
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            // Avoid file:// import specifiers that Vite cannot resolve.
            providerImportSource: "@storybook/addon-docs/mdx-react-shim"
          }
        }
      }
    },
    "@storybook/addon-onboarding",
    "@storybook/addon-mcp"
  ],
  "framework": "@storybook/react-vite",
  viteFinal: (config) => {
    config.optimizeDeps = config.optimizeDeps ?? {};
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude ?? []),
      "playground-elements"
    ];
    return config;
  }
};
export default config;
