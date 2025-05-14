import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

export const useImagePicker = (setPicture: (uri: string) => void) => {
  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'You need to grant permission to access the photo library.');
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const file = {
          uri: result.assets[0].uri,
          name: result.assets[0].fileName || 'uploaded_image.jpg',
          type: result.assets[0].mimeType || 'image/jpeg',
        };

        // Server URL for image upload
        const url = 'https://lagodapat.com/api_pictures.php';
        const formData = new FormData();

        formData.append('image', { uri: file.uri, name: file.name, type: file.type });

        try {
          const response = await fetch(url, {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            Alert.alert('Error', 'Failed to upload the image.');
            return null;
          }

          const responseText = await response.text();
          const jsonResponseStart = responseText.indexOf('{');
          const jsonResponseText = responseText.substring(jsonResponseStart);

          const result = JSON.parse(jsonResponseText);

          if (result.success) {
            setPicture(result.file_url);
            return result.file_url;
          } else {
            Alert.alert('Error', result.error || 'Image upload failed.');
            return null;
          }
        } catch (error) {
          Alert.alert('Error', 'An error occurred while uploading the image.');
          return null;
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick an image.');
    }
  };

  return { requestPermission, pickImage };
};