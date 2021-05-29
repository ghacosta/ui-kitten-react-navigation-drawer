import React from "react";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons"
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { default as theme } from "./theme.json";
import AppNavigator from "./navigation/AppNavigator";

export default () => (
  <>
  <IconRegistry icons={EvaIconsPack} />
  <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  </ApplicationProvider>
  </>
);
