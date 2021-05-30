import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import BlockCard from './BlockCard';
import ViewMore from './ViewMore';

const { width } = Dimensions.get('window');

const SmallCard = ({item}) => {
  
  const handleViewMore = async _ => {
    alert('heloooo')
  };
  if (item.title === 'view more') {
    return (
      <ViewMore
        style={ styles.viewMore }
        onPress={ handleViewMore }
      />
    );
  }

  return (
    <BlockCard
      onPress={ handleViewMore }
      item={item}
      style={styles.container}
      imageStyle={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 150,
  },
  viewMore: {
    width: width / 2,
    height: 200,
  },
});

export default SmallCard;
