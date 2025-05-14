import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  detailsContainer: {
    padding: 10,
    backgroundColor: "#222",
  },
  imageLarge: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00ffcc",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: "#fff",
  },
  map: {
    height: Dimensions.get("window").height * 0.54, // Two-thirds of the screen height
  },
  imageModalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageFull: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  noSightingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },

  noSightingsText: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#555555', 
    textAlign: 'center', 
  },
});

export default styles;