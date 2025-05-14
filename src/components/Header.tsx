import styles from '@/src/styles/components/Header/styles';
import React from 'react';
import { View, Text } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;