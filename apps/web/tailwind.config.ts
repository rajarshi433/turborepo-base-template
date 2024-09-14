import { Config } from "tailwindcss";
import sharedTailwindConfig from "@repo/tailwind-config/sharedTailwindConfig";

const config: Config = {
  ...sharedTailwindConfig, // Merge or extend the shared config

  theme: {
    extend: {
      // App-specific theme customizations
    },
  },
};

export default config;
