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

  const checkIn = 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/mask_group_170.png?alt=media&token=ba29b109-febb-42b7-8702-ab15e133a82a'
  const checkOut = 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/mask_group_171.png?alt=media&token=84379fb3-c372-40c1-a5f7-e166a14e2f60' 

    return (
      <View style={styles.list}>
        <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
          <View style={{ flexDirection:"row", alignItems:"center", paddingLeft:0, flex:3}}>
            <View style={{ width: width > 500 ? 80 : 40, height: width > 500 ? 80 : 40, backgroundColor: booking.status === 'checkOut' ? "#fff0e1" : "#e6fdff" }}>
              <Image source={{ uri: booking.status ==="checkIn" ? checkIn : checkOut} } style={ styles.iconImage }></Image>
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
      alignItems:"center",
      flex: 1
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
