import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { StackScreenProps } from "@react-navigation/stack";

import useStore from "../store";
import { SignInStackParamList } from "../utils/types";

type Props = StackScreenProps<SignInStackParamList, "SignIn">;

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);

  return (
    <Layout style={styles.container}>
      <Button onPress={() => setIsLoggedIn(true)}>
        Let's sign in
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignInScreen;
