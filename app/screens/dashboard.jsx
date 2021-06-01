// ! package / modules
import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { Badge, Button } from 'react-native-paper';
import {useFonts,Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium} from '@expo-google-fonts/poppins';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';


// ! from data internal
import Content from '../components/Content'

const Dashboard = () => {
    
    let [fontsLoaded] = useFonts({Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium})
    if (!fontsLoaded) {
        return <Text>loading</Text>;
    }

    const handleButton = (event) => {
      event.preventDefault()
      alert('hello world')
    }

    return(
      <LinearGradient colors={['#9bf8f4', '#6f7bf7']} style={styles.container}>
      {/* <ScrollView
      > */}
        <View  style={styles.background}>
          <View style={styles.header}>
            <Image source={require('../../assets/ZIPKOS.png')} resizeMode="stretch" width="100%" style={{width: 100, height: 18}}></Image>
            <View>
              <Badge 
                style={{marginRight: 0}} 
                size={18}
                >3</Badge>
              <Icon name="bell-o" color="white" size={27} style={{marginRight: 3}}></Icon>
            </View>
          </View>
          <View style={{...styles.container, paddingTop: 20}}>
            <View style={{flex: 1, flexDirection:'row'}}>
              <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/image%20(1).png?alt=media&token=3efbc4ca-0bef-4285-844f-fe0eafa20d24'}} style={styles.logo}></Image>
              <Text style={[styles.saldo, {fontSize: 20, alignSelf: 'center'}]}>ZipBalance</Text>
            </View>
            <Text style={styles.saldo}>Rp {(15000000)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
            <Button onPress={handleButton} uppercase={false} mode="outlined" color="powderblue" style={{width: 140, backgroundColor: 'white', marginBottom: 60, alignSelf: 'center', fontFamily: 'Poppins_600SemiBold', paddingHorizontal: 2, fontSize: 12, color: '#4db7c2'}}>Withdraw</Button>
          </View>
              <Content />
          </View>
      {/* </ScrollView> */}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  background: {
    width: "100%",
    position:"absolute",
    resizeMode: "cover",
    alignItems: 'center'
  },
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    padding: 14
  }, 
  saldo: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#f6f6f6'
  },
  scrollView: {
    width: '100%',
    flex: 1
  },
  containerStyles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo:{
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginRight: 8,
    marginBottom: 1
  }
});

export default Dashboard