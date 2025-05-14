import React from 'react';
import { View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from './Button';
import styles from '@/src/styles/app/ReportSightings/styles';

const DRAFT_STORAGE_KEY = 'reportSightingDraft';

const DraftManager = ({
  formState,
  setFormState,
}: {
  formState: any;
  setFormState: (state: any) => void;
}) => {
  const saveDraft = async () => {
    try {
      await AsyncStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formState));
      Alert.alert('Draft Saved', 'Your draft has been saved successfully!');
    } catch (error) {
      console.error('Error saving draft:', error);
      Alert.alert('Error', 'Failed to save the draft. Please try again.');
    }
  };

  const loadDraft = async () => {
    try {
      const savedDraft = await AsyncStorage.getItem(DRAFT_STORAGE_KEY);
      if (savedDraft) {
        setFormState(JSON.parse(savedDraft));
        Alert.alert('Draft Loaded', 'Your draft has been loaded.');
      }
    } catch (error) {
      console.error('Error loading draft:', error);
      Alert.alert('Error', 'Failed to load the draft. Please try again.');
    }
  };

  return (
    <View style={styles.draftButtonContainer}>
      <Button title="Save Draft" onPress={saveDraft} />
      <Button title="Load Draft" onPress={loadDraft} />
    </View>
  );
};

export default DraftManager;