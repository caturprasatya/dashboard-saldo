import React, { useEffect } from 'react';
import { Image, Dimensions, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import {useFonts,Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium} from '@expo-google-fonts/poppins';
import Content from '../components/content'

import background from '../assets/jamie_fenn_wd_qu_ee_je_o_0_unsplash_3.svg';


const Dashboard = ({route,navigation}) => {
    
    let [fontsLoaded] = useFonts({Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium})
    if (!fontsLoaded) {
        return <Text>loading</Text>;
    }

    const date = new Date().toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric'
    })
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false })

    const convertRp = saldo => {
      return `Rp ${(saldo/1000000).toFixed(1)}Jt`
    }

    const handleButton = (event) => {
      event.preventDefault()
      alert('hello world')
    }


    return(
        <View style={styles.container}>
          <ImageBackground source={background} style={styles.background}>
            <View style={styles.header}>
                <Image source={require('../assets/jamie_fenn_wd_qu_ee_je_o_0_unsplash_3.svg')} style={styles.logo}></Image>
                <Avatar.Text  size={37} label="NA" />
            </View>
            <View style={{...styles.container, paddingTop: 20}}>
              <View>Rp {(15000000)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</View>
              <Button onPress={handleButton} uppercase={false} mode="outlined" color="black" style={{flexGrow: 1, backgroundColor: 'white', marginBottom: 30}}>Withdraw</Button>
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
    paddingHorizontal: 10,
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
    alignItems: "center"
  }
});

export default Dashboard