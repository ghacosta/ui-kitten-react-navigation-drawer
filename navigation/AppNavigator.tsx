import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerItem as RNDrawerItem,
} from "@react-navigation/drawer";
import {
  Text,
  Drawer,
  DrawerItem,
  IndexPath,
  Layout,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";

import useStore from "../store";
import DashboardScreen from "../screens/DashboardScreen";
import MasterDataScreen from "../screens/MasterDataScreen";
import SignInScreen from "../screens/SignInScreen";
import { CubeIcon, HomeIcon, PowerIcon } from "../utils/icons";

const Stack = createStackNavigator();
const { Navigator, Screen } = createDrawerNavigator();

const DrawerHeader = () => {
  return (
    <Layout style={styles.header}>
      <View>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
      </View>
    </Layout>
  );
};

const DrawerContent = ({
  navigation,
  state,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);

  return (
    <SafeAreaView>
      <Drawer
        header={DrawerHeader}
        selectedIndex={new IndexPath(state.index)}
        onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
      >
        <DrawerItem title="Dashboard" accessoryLeft={HomeIcon} />
        <DrawerItem title="MasterData" accessoryLeft={CubeIcon} />
        <DrawerItem
          title="Log Out"
          accessoryLeft={PowerIcon}
          onPress={() => setIsLoggedIn(false)}
        />
      </Drawer>
    </SafeAreaView>
  );
};

const DrawerNavigator = () => {
  return (
    <Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Screen name="Dashboard" component={DashboardScreen} />
      <Screen name="MasterData" component={MasterDataScreen} />
      <Screen name="Log Out">{() => <View />}</Screen>
    </Navigator>
  );
};

const AppNavigator = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <DrawerNavigator />
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
  },
  logo: {
    height: 40,
    width: 40,
  },
});

export default AppNavigator;
