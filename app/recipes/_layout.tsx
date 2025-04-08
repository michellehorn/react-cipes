import { Stack } from 'expo-router';

export default function LayoutRecipe() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: '' }} />
      <Stack.Screen name="[id]" options={{ title: '' }} />
      <Stack.Screen name="new" options={{ title: 'New Recipe' }} />
    </Stack>
  );
}
