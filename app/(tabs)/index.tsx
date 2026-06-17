import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-extrabold text-primary">Home</Text>
      <Link
        href="/Onboarding"
        className="mt-4 rounded font-sans-bold bg-primary text-white p-4"
      >
        Go to Onboarding
      </Link>

      <Link
        href="/(auth)/Sign-up"
        className="mt-4 rounded font-sans-bold bg-primary text-white p-4"
      >
        go to sign up
      </Link>

      <Link
        href="/(auth)/Sign-in"
        className="mt-4 rounded font-sans-bold bg-primary text-white p-4"
      >
        go to Log in
      </Link>
      <Link
        href="/subscriptions"
        className="mt-4 rounded font-sans-bold bg-primary text-white p-4"
      >
        Subscriptions
      </Link>
    </SafeAreaView>
  );
}
