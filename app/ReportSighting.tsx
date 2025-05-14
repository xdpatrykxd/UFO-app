import React, { useEffect, useState } from 'react';
import { View, Alert, ScrollView, RefreshControl } from 'react-native';
import { useImagePicker } from '../src/hooks/useImagePicker';
import { postSighting } from '../src/utils/api';
import { useFormState } from '@/src/hooks/useForm';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import StatusSelector from '../src/components/StatusSelector';
import DraftManager from '../src/components/DraftManager';
import ImagePickerButton from '../src/components/ImagePickerButton';
import { validateSightingForm } from '../src/utils/validation';
import styles from '@/src/styles/app/ReportSightings/styles';

const ReportSightingPage = () => {
  const { formState, updateField, resetForm, setFormState } = useFormState();
  const { name, contact, latitude, longitude, description, picture, status, dateTime } = formState;
  const [refreshing, setRefreshing] = useState(false);

  const { requestPermission, pickImage } = useImagePicker((uri) => updateField('picture', uri));

  useEffect(() => {
    requestPermission();
  }, []);

  const refreshHandler = async () => {
    setRefreshing(true);
    resetForm();
    setRefreshing(false);
  };

  const handleSubmit = async () => {
    const validationError = validateSightingForm(formState);
    if (validationError) {
      Alert.alert('Error', validationError);
      return;
    }

    const newSighting = {
      witnessName: name.trim(),
      witnessContact: contact.trim() || '',
      location: { latitude: parseFloat(latitude), longitude: parseFloat(longitude) },
      description: description.trim(),
      picture: picture.trim(),
      status,
      dateTime: dateTime || new Date().toISOString(),
    };

    try {
      const result = await postSighting(newSighting);

      if (result) {
        Alert.alert('Success', 'Sighting reported successfully!');
        resetForm(); 
      } else {
        Alert.alert('Error', 'Failed to report the sighting.');
      }
    } catch (error) {
      console.error('Error reporting sighting:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.refresh}
        contentContainerStyle={styles.container}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />}
      >
        {/* Draft management buttons */}
        <DraftManager formState={formState} setFormState={setFormState} />
        
        <Input placeholder="Witness Name *" value={name} onChangeText={(text) => updateField('name', text)} />
        <Input placeholder="Contact Information (Optional)" value={contact} onChangeText={(text) => updateField('contact', text)} />
        <Input
          placeholder="Latitude *"
          value={latitude}
          onChangeText={(text) => updateField('latitude', text)}
          keyboardType="numeric"
        />
        <Input
          placeholder="Longitude *"
          value={longitude}
          onChangeText={(text) => updateField('longitude', text)}
          keyboardType="numeric"
        />
        <Input
          placeholder="Describe the sighting *"
          value={description}
          onChangeText={(text) => updateField('description', text)}
          multiline
        />

        <ImagePickerButton picture={picture} pickImage={pickImage} />

        <StatusSelector status={status} setStatus={(value) => updateField('status', value)} />

        <Input
          placeholder="Date and Time (YYYY-MM-DDTHH:mm:ssZ)"
          value={dateTime}
          onChangeText={(text) => updateField('dateTime', text)}
        />
        <Button title="Submit Sighting" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
};

export default ReportSightingPage;