import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    paddingBottom: 25,
    backgroundColor: '#ff642c',
    paddingHorizontal: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
