import React from 'react'
import { Image, FlatList, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-paper';
import {useFonts,Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium} from '@expo-google-fonts/poppins';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'

import ListItemMyTransaction from './listItemTransaction';
import ListItemMyBooking from './listItemBooking';
import { room, booking, financial } from '../../data/data'
import SmallCard from './SmallCard'

const { width } = Dimensions.get('screen')

const Content = () =>  {
    let [fontsLoaded] = useFonts({Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium})
    if (!fontsLoaded) {
        return <Text>loading</Text>;
    }

    const day = moment();
    const date = day.format("DD-MMM-YYYY").split("-").join(" ");
    const time = day.format('HH:MM')
    const sortFinancial = financial.splice(0, 3)
    const sortBooking = booking.splice(0, 4)

    const handleButton = (event) => {
      event.preventDefault()
      alert('hello world')
    }


  return (
    <View style={styles.content}>
      <LinearGradient colors={['#F3FDFF', '#FFFFFF']} style={styles.card}>
        <View style={styles.header}>
          <Text style={{...styles.subCategory, fontSize: 15, color: 'black'}}>Monthly Total</Text>   
          <Text style={{...styles.subCategory, fontSize: 12, color: '#c8c2bc', fontFamily: 'Poppins_500Medium' }}>Last Update: { date }, { time }</Text>
        </View>
        <View style={styles.line}></View>
        <View style={{flex: 1, width: "100%", flexDirection: 'row'}}>
          <View style={styles.cardGroup}>
            <View style={styles.cardPatch}>
              <Image source={require('../../assets/mask_group_157.svg')} style={styles.logo} width="80%" height="80%"></Image>
            </View>
            <Text style={styles.text}>Income</Text>
          </View>
          <View style={styles.cardGroup}>
            <View style={styles.cardPatch}>
              <Image source={require('../../assets/mask_group_159.svg')} style={styles.logo} width="80%" height="80%"></Image>
            </View>
            <Text style={styles.text}>Income</Text>
          </View>
          <View style={styles.cardGroup}>
            <View style={styles.cardPatch}>
              <Image source={require('../../assets/mask_group_160.svg')} style={styles.logo} width="80%" height="80%"></Image>
            </View>
            <Text style={styles.text}>Income</Text>
          </View>
          <View style={styles.cardGroup}>
            <View style={styles.cardPatch}>
              <Image source={require('../../assets/mask_group_161.svg')} style={styles.logo} width="80%" height="80%"></Image>
            </View>
            <Text style={styles.text}>Income</Text>
          </View>
        </View>
      </LinearGradient>
      <ScrollView horizontal={true}>
        <View style={styles.buttonContainer}>
            <Button onPress={handleButton} mode="contained" style={{marginRight: 10, width: 50, flex: 1}}>Add Property</Button>
            <Button onPress={handleButton} mode="contained" style={{paddingTop:0, flex: 1}}>
                <Icon name="commenting-o" style={{fontSize:20}}></Icon>
            </Button>
        </View>
      </ScrollView>
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
  card:{
    marginTop: 10,
    backgroundColor: "red",
    width : "100%",
    height : 200,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 17,
    marginTop: -60
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
  buttonContainer : {
      flexDirection: "row",
      marginTop: 10
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
  line: {
    height: 1.3,
    marginTop: 8,
    width: "90%",
    backgroundColor: 'black',
    alignSelf: 'center'
  },
  cardGroup: {
    flex: 1,
    minHeight: 50,
    flexDirection: "column",
    paddingTop: 20
  },
  logo:{
    width: "65%",
    height: "65%",
    alignSelf:'center',
    marginTop: 3.3,
    shadowColor: 'black'
  },
  cardPatch: {
    width: Math.floor(width/6),
    height: Math.floor(width/6),
    backgroundColor: "white",
    alignSelf: 'center',
    borderRadius: 20,
    padding: 8
  },
  text:{
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 5,
    color: '#45B3BE'
  },
  linearGradient: {
    height: 50,
    width: '100%',
    marginTop: -10,
    paddingLeft: 10
  },
});


export default Content