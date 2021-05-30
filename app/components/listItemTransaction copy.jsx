import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import moment from 'moment';

import income from '../../assets/mask_group_164.svg'
import expance from '../../assets/mask_group_166.svg'
import { room } from '../../data/data'

const { width } = Dimensions.get('screen')

const ListItemTransaction = ({ transaction })=>{

  const day = moment();
  const date = day.format("DD-MMM-YYYY").split("-").join(" ");
  const time = day.format('HH:MM')
  const getCurrentMonth = day.month('MMM');

  const convertRp = saldo => {
    switch (transaction.status) {
      case "income":
        return `+ Rp ${(saldo/1000000).toFixed(1)}Jt`
      case "expance":
        return `- Rp ${(saldo/1000000).toFixed(1)}Jt`
      default:
        break;
    }
  }

  useEffect(() => {
    console.log(transaction.status === "income" ? true : false);
    console.log(transaction.status);
    console.log(room);
  }, [])

    return (
      <View style={styles.list}>
        <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
          <View style={{ flexDirection:"row", alignItems:"center", paddingLeft:0, flex:3}}>
            <View style={{ width: width > 500 ? 80 : 40, height: width > 500 ? 80 : 40, backgroundColor: transaction.status === 'income' ? "#E6FDFF" : "#FCEEF1" }}>
              <Image source={ transaction.status ==="income" ? income : expance } style={styles.iconImage}></Image>
            </View>
            <View style={{flex:1, marginLeft: 5}}>
              <Text style={{fontFamily:"Poppins_600SemiBold", fontSize: 17}} numberOfLines={1}>Income - </Text>
              <Text style={{fontFamily:"Poppins_500Medium", marginTop:-5, fontSize: 10}}>{ date } | {time} </Text>
            </View>
          </View>
          <Text style={{fontFamily:"Poppins_500Medium", color: transaction.status === 'income' ? 'blue' : 'red'}}>{ convertRp(1000000) }</Text>
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
