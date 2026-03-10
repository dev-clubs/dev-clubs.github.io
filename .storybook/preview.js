import "../src/styles/global.css";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  globalTypes: {
    uiTheme: {
      name: "Theme",
      description: "Expressive Vainilla theme mode",
      defaultValue: "dark",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "system", title: "System" },
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" }
        ]
      }
    },
    uiExpression: {
      name: "Expression",
      description: "Expressive Vainilla expression level",
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
        const theme = context.globals.uiTheme;
        const expression = context.globals.uiExpression;
        const isExpressiveStory = String(context.title || "").startsWith("Expressive Vainilla/");

        if (theme === "system") {
          root.removeAttribute("data-ui-theme");
          root.removeAttribute("data-theme-mode");
        } else {
          root.setAttribute("data-ui-theme", theme);
          root.setAttribute("data-theme-mode", theme);
        }

        root.setAttribute("data-ui-expression", expression);

        if (isExpressiveStory) {
          root.setAttribute("data-ui-font", "google-sans");
        } else {
          root.removeAttribute("data-ui-font");
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
