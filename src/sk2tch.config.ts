// Not used yet, but the goal is to be able to do:

import { Sk2tchConfig } from "sk2tch/cli/sk2tch.config";

// npx sk2tch dev
// npx sk2tch package itch
// npx sk2tch package steam-osx
// npx sk2tch package steam-win

const config: Sk2tchConfig = {
  name: "Arcade",
  entry: "./index.tsx",
  output: "./dist",
  code: "arcade",

  releasing: {
    appId: "arcadeo.io.qwook",
  },
};
export default config;
