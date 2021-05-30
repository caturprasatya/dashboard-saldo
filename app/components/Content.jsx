import React from 'react'
import { Image, FlatList, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useFonts,Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium} from '@expo-google-fonts/poppins';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'

import ListItemMyTransaction from './listItemTransaction';
import ListItemMyBooking from './listItemBooking';
import { room, booking, financial } from '../../data/data'
import SmallCard from './SmallCard'
import ListButtonMenu from './ListButtonMenu'
import CardBoard from './CardBoard'

const Content = () =>  {
    let [fontsLoaded] = useFonts({Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium})
    if (!fontsLoaded) {
        return <Text>loading</Text>;
    }

    const sortFinancial = financial.splice(0, 3)
    const sortBooking = booking.splice(0, 4)

  return (
    <View style={styles.content}>
      <CardBoard />
      <ListButtonMenu />
      <ScrollView>
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
          <LinearGradient 
            colors={['transparent', 'rgba(255,255)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }} 
            style={styles.linearGradient}>
              <Text style={{color: "#000"}}>Test</Text>
          </LinearGradient>
        </View>
        <View style={{marginTop:2, flex:1, marginBottom:0}}>
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
          <LinearGradient 
            colors={['transparent', 'rgba(255,255)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }} 
            style={styles.linearGradient}>
              <Text style={{color: "#000"}}>Test</Text>
          </LinearGradient>
        </View>
        <View style={{marginTop:0, flex:1, marginBottom:8}}>
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
      </ScrollView>
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
    fontSize: 23,
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
    height: 50,
    width: '100%',
    marginTop: -10,
    paddingLeft: 10
  },
});


export default Content