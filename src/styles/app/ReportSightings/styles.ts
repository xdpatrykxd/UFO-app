import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 10,
  },
  refresh: {
    backgroundColor: '#111',
  },
  imagePickerButton: {
    backgroundColor: '#00ffcc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  imageText: {
    color: '#fff',
    marginTop: 10,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  draftButtonContainer:{
    backgroundColor: '#111',
    paddingBottom: 10,
  },
  statusLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginRight: 10,
  },
  statusButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  selectedStatusButton: {
    backgroundColor: "#00ffcc",
    borderColor: "#0056b3",
  },
  statusButtonText: {
    fontSize: 14,
    color: "#333",
  },
  selectedStatusButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  imagePickerContainer: {
    marginBottom: 10,
  },
  imageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedImage: {
    width: 35,
    height: 35,
    marginRight: 10, 
  },
  imageLinkText: {
    fontSize: 12,
    color: 'black', 
    marginTop: 5, 
    flexWrap: 'wrap',
  },
});
export default styles;