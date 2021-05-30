// ! package / modules
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import {useFonts,Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium} from '@expo-google-fonts/poppins';

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
        <View style={styles.container}>
          <ImageBackground source={background} style={styles.background}>
            <View style={styles.header}>
                <Image source={require('../../assets/jamie_fenn_wd_qu_ee_je_o_0_unsplash_3.svg')} style={styles.logo}></Image>
                <Avatar.Text  size={37} label="NA" />
            </View>
            <View style={{...styles.container, paddingTop: 20}}>
              <Text style={styles.saldo}>Rp {(15000000)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
              <Button onPress={handleButton} uppercase={false} mode="outlined" color="powderblue" style={{flexGrow: 1, backgroundColor: 'white', marginBottom: 60}}>Withdraw</Button>
            </View>
              <Content />
          </ImageBackground>
        </View>
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
    marginTop: 40
  }, 
  saldo: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#f6f6f6'
  }

});

export default Dashboard