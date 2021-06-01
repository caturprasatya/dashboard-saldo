import React, { useRef } from 'react'
import { FlatList, StyleSheet, Text, View, Dimensions, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useFonts,Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium} from '@expo-google-fonts/poppins';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'

import ListItemMyTransaction from './List/ListItemTransaction';
import ListItemMyBooking from './List/ListItemBooking';
import { room, booking, financial } from '../../data/data'
import SmallCard from './Card/SmallCard'
import ListButtonMenu from './List/ListButtonMenu'
import CardBoard from './Card/CardBoard'

const Content = () =>  {
    let [fontsLoaded] = useFonts({Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium})
    if (!fontsLoaded) {
        return <Text>loading</Text>;
    }

    const sortFinancial = financial.splice(0, 3)
    const sortBooking = booking.splice(0, 4)

    // const scrollViewRef = useRef();


  return (
    <View style={styles.content}>
      <CardBoard />
      <ListButtonMenu />
        <View style={{marginTop:20, flex:1, marginBottom:0}}>
          <Text style={{...styles.subCategory, color:"#3C5CAC"}}>Financial Statistics</Text>
          {
            sortFinancial?.map(data => 
              <ListItemMyTransaction
              transaction={data}
              keyExtractor={data.id}
              key={ data.id }
              />
            )
          }
          <View 
            style={styles.linearGradient}>
            <ImageBackground resizeMode="cover" style={[styles.background, { marginTop: -0 }]} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/jamie_fenn_wd_qu_ee_je_o_0_unsplash_4.png?alt=media&token=df7341c2-ce10-447a-8c15-bd909b6d9aa2' }}></ImageBackground>
              <Text style={styles.textDetail}>See Details</Text>
          </View>
        </View>

        <View style={{marginTop:30, flex:1, marginBottom:0}}>
          <Text style={{...styles.subCategory, color:"#3C5CAC"}}>Booking Statistics</Text>
          {
            sortBooking?.map(data => 
              <ListItemMyBooking
              booking={data}
              keyExtractor={data.id}
              key={ data.id }
              />
            )
          }
          <View 
            style={styles.linearGradient}>
            <ImageBackground resizeMode="cover" style={styles.background} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/jamie_fenn_wd_qu_ee_je_o_0_unsplash_4.png?alt=media&token=df7341c2-ce10-447a-8c15-bd909b6d9aa2' }}></ImageBackground>
              <Text style={styles.textDetail}>See Details</Text>
          </View>
        </View>
        <View style={{marginTop:30, flex:1, marginBottom:8}}>
          <Text style={{...styles.subCategory, color:"#3C5CAC"}}>My Property</Text>
          <FlatList
            data={room}
            horizontal
            showsHorizontalScrollIndicator={true}
            renderItem={({ item, index }) => (
              <SmallCard
                item={item}
                key={ index }
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 10,
    backgroundColor: '#ecf0f1',
  },
  header:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subCategory:{
    fontFamily:'Poppins_700Bold',
    fontSize: 20,
    color: "#00ead3",
  },
  judulSaldo:{
    fontFamily:'Poppins_600SemiBold',
    fontSize: 20,
    color: "#00ead3",
    paddingLeft: 6,
    marginBottom: 0
  },
  saldo:{
    fontFamily:'Poppins_600SemiBold',
    fontSize: 12,
    color: "#00ead3",
  },
  ilustrasi :{
    position: "absolute",
    bottom: 25,
    right :20,
    width: 120,
    height: 100,
    opacity: 0.5
  },
  content:{
    padding: 19,
    backgroundColor:"white", 
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignSelf: 'center',
    minHeight: 800
  },
  linearGradient: {
    height: 20,
    width: '100%',
    marginTop: -30,
  },
  background: {
    width: "100%",
    height: "100%",
    padding: 0,
  },
  textDetail: {color: "#000", fontFamily: 'Poppins_600SemiBold', fontSize: 14, marginBottom: -1, color: '#45B3BE', marginLeft: 16}
});

export default Content
