
import React from 'react';
import { Text } from 'react-native';

const Title = ({ children, numberOfLines = 1, size = 14 }) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{fontSize: size }}
    >
      {children}
    </Text>
  );
};

export default Title;