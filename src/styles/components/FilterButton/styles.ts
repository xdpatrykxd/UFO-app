import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  filterButton: {
    backgroundColor: '#00ffcc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  filterButtonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;