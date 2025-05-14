import styles from "@/src/styles/components/SightingCard/styles";
import React from "react";
import { Modal, TouchableWithoutFeedback, View, Image } from "react-native";

const ImageModal = ({
  isVisible,
  toggleImageModal,
  picture,
}: {
  isVisible: boolean;
  toggleImageModal: () => void;
  picture: string;
}) => (
  <Modal visible={isVisible} transparent={true} animationType="fade">
    <TouchableWithoutFeedback onPress={toggleImageModal}>
      <View style={styles.imageModalContainer}>
        <Image source={{ uri: picture }} style={styles.imageFull} />
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

export default ImageModal;