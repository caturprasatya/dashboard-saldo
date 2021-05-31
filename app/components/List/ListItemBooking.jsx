import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import moment from 'moment';

const { width } = Dimensions.get('screen')

const ListItemTransaction = ({ booking })=>{

  const day = moment();
  const date = day.format("DD-MMM-YYYY").split("-").join(" ");
  const time = day.format('HH:MM')
  const getCurrentMonth = day.format('MMM');

  const getQuantity = quantity => {
    switch (booking.status) {
      case "checkIn":
        return `+ ${quantity} Peoples`
      case "checkOut":
        return `- ${quantity} Peoples`
      default:
        break;
    }
  }

  const checkIn = 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/mask_group_170.svg?alt=media&token=8e8229bd-b568-4e3c-ac0f-316b561189c0'
  const checkOut = 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/mask_group_171.svg?alt=media&token=b0eec123-4cc3-493b-9d34-7c1cf81fec8f' 

    return (
      <View style={styles.list}>
        <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
          <View style={{ flexDirection:"row", alignItems:"center", paddingLeft:0, flex:3}}>
            <View style={{ width: width > 500 ? 80 : 40, height: width > 500 ? 80 : 40, backgroundColor: booking.status === 'checkOut' ? "#fff0e1" : "#e6fdff" }}>
              <Image source={{ uri: booking.status ==="checkIn" ? checkIn : checkOut} } style={ styles.iconImage }></Image>
              {/* <SvgUri
                width="100%"
                height="100%"
                uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
              /> */}

            </View>
            <View style={{flex:1, marginLeft: 5}}>
              <Text style={{fontFamily:"Poppins_600SemiBold", fontSize: 14, flexGrow: 1}} numberOfLines={1}>{ booking.title }</Text>
              <Text style={{fontFamily:"Poppins_500Medium", marginTop:-3, fontSize: 10, flex: 1}}>{ date } | {time} </Text>
            </View>
          </View>
          <Text style={{fontFamily:"Poppins_500Medium", color: booking.status === 'checkIn' ? '#45b3be' : '#f17c31'}}>{ getQuantity(booking.quantity) }</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    list : {
      flexDirection: "row",
      backgroundColor: "white",
      padding: 5,
      borderRadius: 10,
      alignItems:"center"
    },
    icon: {
      width: width > 500 ? 80 : 40,
      height: width > 500 ? 80 : 40,
      backgroundColor: "#E6FDFF"
    },
    iconImage:{
      alignSelf: 'center',
      width: "80%",
      height: "80%",
      marginTop: 4
    }
})
export default ListItemTransaction
