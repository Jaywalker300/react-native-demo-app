import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Signin = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text>Signin</Text>
      <Link
        href="/(auth)/Sign-in"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        <Text>Log in</Text>
      </Link>

      <Link href="/" className=" mt-4 p-64: rounded bg-primary text-white p-4">
        <Text>Back</Text>
      </Link>
    </View>
  );
};

export default Signin;
