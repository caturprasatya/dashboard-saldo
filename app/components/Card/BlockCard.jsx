import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Svg, {
  Use,
  SvgUri
} from 'react-native-svg';
import Title from '../Title'


const BlockCard = ({item, style, imageStyle}) => {
  const { image, title } = item;
  useEffect(() => {
    console.log(image);
  }, [])
  return (
    <TouchableWithoutFeedback onPress={() => console.log('good')}>
      <View style={[styles.container, style]}>
        <Image
          style={[styles.image, imageStyle]} 
          width="100%"
          height="100%"
          resizeMode="cover"
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/20200814_172713.svg?alt=media&token=b9d65a89-ae50-43ba-85aa-4c2124c64b72'}} />
          {/* <SvgUri
            width="25"
            height="25"
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/20200814_172713.svg?alt=media&token=b9d65a89-ae50-43ba-85aa-4c2124c64b72'}} /> */}
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});

export default BlockCard;
