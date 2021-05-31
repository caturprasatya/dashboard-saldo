import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import moment from 'moment';

const { width } = Dimensions.get('screen')

const ListItemTransaction = ({ transaction })=>{

  const day = moment();
  const date = day.format("DD-MMM-YYYY").split("-").join(" ");
  const time = day.format('HH:MM')
  const getCurrentMonth = day.format('MMM');

  const convertRp = saldo => {
    switch (transaction.status) {
      case "income":
        return `+ Rp ${(saldo/1000000).toFixed(1)}Jt`
      case "expense":
        return `- Rp ${(saldo/1000000).toFixed(1)}Jt`
      default:
        break;
    }
  }

  const Income = 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/mask_group_164.svg?alt=media&token=bb469751-32ed-46b1-95f8-106f7b8377e7'
  const Expense = 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/mask_group_166.svg?alt=media&token=ef49c8f9-6c6a-4459-9c67-63268935dfb6'

  useEffect(() => {
    console.log(transaction.status === "income" ? true : false);
    console.log(transaction.status);
    console.log((2300000/1000000).toFixed(1));
    console.log(getCurrentMonth);
  }, [])

    return (
      <View style={styles.list}>
        <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
          <View style={{ flexDirection:"row", alignItems:"center", paddingLeft:0, flex:3}}>
            <View style={{ width: width > 500 ? 80 : 40, height: width > 500 ? 80 : 40, backgroundColor: transaction.status === 'income' ? "#E6FDFF" : "#FCEEF1" }}>
              <Image source={{ uri: transaction.status === 'income' ? Income : Expense }} style={styles.iconImage}></Image>
            
            </View>
            <View style={{flex:1, marginLeft: 5}}>
              <Text style={{fontFamily:"Poppins_600SemiBold", fontSize: 15}} numberOfLines={1}>{ transaction.title } - { getCurrentMonth }</Text>
              <Text style={{fontFamily:"Poppins_500Medium", marginTop:-5, fontSize: 10}}>{ date } | {time} </Text>
            </View>
          </View>
          <Text style={{fontFamily:"Poppins_500Medium", color: transaction.status === 'income' ? 'blue' : 'red'}}>{ convertRp(transaction.amount) }</Text>
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
