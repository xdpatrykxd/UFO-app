import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: '#00ffcc',
    textAlign: 'center',
    marginVertical: 10,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginVertical: 20,
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
export default styles;