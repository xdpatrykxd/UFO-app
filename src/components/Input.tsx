import styles from '@/src/styles/components/Input/styles';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { InputProps } from '../types/types';



const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, keyboardType, ...props }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}  
      {...props} 
    />
  );
};
export default Input;