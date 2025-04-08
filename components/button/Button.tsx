import { Pressable, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  title: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
};

export default function Button({ title, onPress, icon }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.text}>{title}</Text>
        {icon && <Ionicons name={icon} size={16} color="white" style={styles.icon} />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff642c',
    padding: 14,
    borderRadius: 12,
    marginTop: 24,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 6,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
