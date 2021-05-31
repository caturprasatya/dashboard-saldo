// ! package / modules
import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { Badge, Button } from 'react-native-paper';
import {useFonts,Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium} from '@expo-google-fonts/poppins';
import Icon from 'react-native-vector-icons/FontAwesome';

// ! from data internal
import Content from '../components/Content'
import background from '../../assets/jamie_fenn_wd_qu_ee_je_o_0_unsplash_3.svg';


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
      // <ScrollView
      //     style={styles.scrollView}
      //     contentContainerStyle={styles.containerStyles}>
        <View style={styles.container}>
        <ImageBackground resizeMode="cover" source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/jamie_fenn_wd_qu_ee_je_o_0_unsplash_3.svg?alt=media&token=2b5a700c-bb71-459d-82a0-aa7000a7a7b2' }} style={styles.background}>
          <View style={styles.header}>
            <Image source={require('../../assets/ZIPKOS.png')} resizeMode="stretch" width="100%" style={{width: 100, height: 18}}></Image>
            <View>
              <Badge 
                style={{marginRight: 0}} 
                size={26}
                >3</Badge>
              <Icon name="bell-o" color="white" size={29} style={{marginRight: 3}}/>
            </View>
          </View>
          <View style={{...styles.container, paddingTop: 20}}>
            <View style={{flex: 1, flexDirection:'row'}}>
              <Image source={require('../../assets/wallet.png')} style={styles.logo}></Image>
              <Text style={[styles.saldo, {fontSize: 20}]}>ZipBalance</Text>
            </View>
            <Text style={styles.saldo}>Rp {(15000000)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
            <Button onPress={handleButton} uppercase={false} mode="outlined" color="powderblue" style={{width: 140, backgroundColor: 'white', marginBottom: 60, alignSelf: 'center'}}>Withdraw</Button>
          </View>
            <Content />
        </ImageBackground>
        </View>
      // </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#ecf0f1',
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
    marginTop: 0,
    width: "100%",
    padding: 10
  }, 
  saldo: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#f6f6f6'
  },
  scrollView: {
    width: '100%',
  },
  containerStyles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo:{
    width: 15,
    height: 15,
    alignSelf: 'center',
    marginRight: 12
  }
});

export default Dashboard