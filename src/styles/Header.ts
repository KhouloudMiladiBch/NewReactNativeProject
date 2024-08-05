import { StyleSheet } from 'react-native';
import { black, transparent, white, windowHeight, windowWidth } from '../utils';

const headerStyles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: windowHeight * 0.05,
      backgroundColor: transparent,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonText: {
      color:white,
      fontWeight:'bold',
      fontSize: windowWidth * 0.04,
    },
    scene: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: white,
    },
    text: {
      fontSize: 24,
    },
    tabBar: {
      backgroundColor: transparent,
      width : windowWidth * 0.6,
      alignSelf:'center',
      justifyContent:'center'
    },
    indicator: {
      alignSelf:'center',
      justifyContent:'center',
      backgroundColor: white,
      alignItems:'center',
      width:windowWidth * 0.1, 
      left: '15%',
      right: '15%',
    },
    label: {
      color: white,
      fontWeight:'bold',
      fontSize:windowWidth * 0.04
    },
  });

  export default headerStyles;
