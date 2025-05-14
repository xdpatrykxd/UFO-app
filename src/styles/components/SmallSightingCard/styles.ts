import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    margin: 0,
  },
  card: {
    backgroundColor: '#222',
    padding: 10, 
    borderRadius: 10,
    flex: 1, 
  },
  cardContent: {
    flex: 1, 
    justifyContent: 'flex-start', 
  },
  image: {
    width: '100%',
    height: 100, 
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
  },
  description: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    height: '80%',
    backgroundColor: '#111',
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalScroll: {
    flexGrow: 1,
  },
  map: {
    height: 200,
    borderBottomWidth: 1,
    borderColor: '#333',
  },
  detailsContainer: {
    padding: 15,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00ffcc',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#00ffcc',
  },
  closeButton: {
    backgroundColor: '#00ffcc',
    padding: 10,
    alignItems: 'center',
    margin: 15,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
});

export default styles;