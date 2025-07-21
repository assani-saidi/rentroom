
import '../global.css';




import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';







export const unstable_settings = {
  // Set Signup as the initial route.
  initialRouteName: "Signup",
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="Signup" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
