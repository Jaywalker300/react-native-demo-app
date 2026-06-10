import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text>Signin</Text>
      <Link
        href="/(auth)/Sign-up"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Create Account
      </Link>
      link to home
      <Link href="/" className=" mt-4 p-64: rounded bg-primary text-white p-4">
        back
      </Link>
    </View>
  );
};

export default SignUp;
