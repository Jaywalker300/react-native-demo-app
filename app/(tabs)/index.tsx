import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/Onboarding"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Onboarding
      </Link>

      <Link
        href="/(auth)/Sign-up"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        go to sign up
      </Link>

      <Link
        href="/(auth)/Sign-in"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        go to Log in
      </Link>
      <Link
        href="/subscriptions"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Subscriptions
      </Link>
      <Link
        href={{
          pathname: "/Subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Subscriptions
      </Link>
    </View>
  );
}
