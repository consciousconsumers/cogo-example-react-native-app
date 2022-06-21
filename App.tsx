import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import designTokens from './design-tokens';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button>Primary Button</Button>
      </View>
      <View style={styles.row}>
        <Button buttonStyle='secondary'>Secondary Button</Button>
      </View>
      <View style={styles.row}>
        <Button buttonStyle='primary' buttonShape='circle' icon='plus' />
        <Button buttonStyle='secondary' buttonShape='circle' icon='minus' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    marginBottom: designTokens.space[4],
    flexDirection: 'row'
  }
});
