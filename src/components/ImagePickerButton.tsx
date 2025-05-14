import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from '@/src/styles/app/ReportSightings/styles';

const ImagePickerButton = ({
  picture,
  pickImage,
}: {
  picture: string;
  pickImage: () => void;
}) => (
  <TouchableOpacity onPress={pickImage} style={styles.imagePickerButton}>
    <View style={styles.imageTextContainer}>
      {picture ? (
        <Image
          source={{ uri: picture }}
          style={styles.selectedImage}
          resizeMode="contain"
        />
      ) : null}
      <Text style={styles.buttonText}>
        {picture ? 'Change Picture' : 'Pick a Picture'}
      </Text>
    </View>
    {picture ? (
      <Text style={styles.imageLinkText}>{picture}</Text>
    ) : null}
  </TouchableOpacity>
);

export default ImagePickerButton;