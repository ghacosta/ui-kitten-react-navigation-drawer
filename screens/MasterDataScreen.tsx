import React from "react";
import { StyleSheet } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import {
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";

import { MenuDrawerParamList } from "../utils/types";
import { MenuIcon } from "../utils/icons";

type Props = DrawerScreenProps<MenuDrawerParamList, "MasterData">;

const MasterDataScreen: React.FC<Props> = ({ navigation }) => {
  const renderDrawerAction = () => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navigation.openDrawer()}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Master Data"
        alignment="center"
        accessoryLeft={renderDrawerAction}
      />
      <Divider />
      <Layout style={styles.container}>
        <Button onPress={() => navigation.navigate("Dashboard")}>
          Go to Dashboard
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MasterDataScreen;
