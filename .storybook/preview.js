import "../src/styles/material.css";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  globalTypes: {
    mdTheme: {
      name: "Theme",
      description: "Material theme mode",
      defaultValue: "system",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "system", title: "System" },
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" }
        ]
      }
    },
    mdExpression: {
      name: "Expression",
      description: "Material expression level",
      defaultValue: "medium",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "low", title: "Low" },
          { value: "medium", title: "Medium" },
          { value: "high", title: "High" }
        ]
      }
    }
  },
  decorators: [
    (Story, context) => {
      if (typeof document !== "undefined") {
        const root = document.documentElement;
        const theme = context.globals.mdTheme;
        const expression = context.globals.mdExpression;
        const isMaterialStory = String(context.title || "").startsWith("Material 3/");

        if (theme === "system") {
          root.removeAttribute("data-md-theme");
        } else {
          root.setAttribute("data-md-theme", theme);
        }

        root.setAttribute("data-md-expression", expression);

        if (isMaterialStory) {
          root.setAttribute("data-md-font", "google-sans");
        } else {
          root.removeAttribute("data-md-font");
        }
      }

      return Story();
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  }
};

export default preview;
