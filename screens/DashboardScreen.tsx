import React from "react";
import { StyleSheet } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import {
  Layout,
  Button,
  TopNavigationAction,
  TopNavigation,
  Divider,
} from "@ui-kitten/components";

import { MenuDrawerParamList } from "../utils/types";
import { MenuIcon } from "../utils/icons";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = DrawerScreenProps<MenuDrawerParamList, "Dashboard">;

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
  const renderDrawerAction = () => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navigation.openDrawer()}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Dashboard"
        alignment="center"
        accessoryLeft={renderDrawerAction}
      />
      <Divider />
      <Layout style={styles.container}>
        <Button onPress={() => navigation.navigate("MasterData")}>
          Go to Master Data Screen
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DashboardScreen;
