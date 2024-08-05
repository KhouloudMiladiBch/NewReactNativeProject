import { StyleSheet } from 'react-native';
import { black, transparent, white, windowHeight, windowWidth } from '../utils';

const homeStyles = StyleSheet.create({
      container: {
        flex: 1,
      },
      videoContainer: {
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
      },
      video: {
        width: '100%',
        height: '100%',
      },
      titleContainer: {
        backgroundColor : transparent,
       /*  height: windowHeight * 0.2, */
        width: windowWidth,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf:'center',
        bottom: windowHeight * 0.15,
      },
      titleText: {
        color: white,
        fontWeight:'bold',
        fontSize: windowWidth * 0.05,
        textAlign: 'left',
        padding: windowWidth * 0.01,
      },
      descriptionText: {
        color: white,
        fontWeight:'bold',
        fontSize: windowWidth * 0.04,
        textAlign: 'left',
        padding: windowWidth * 0.01,
      },
      playIconContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight,
      },
      playIcon: {
        fontSize: 50,
        color: black,
      },
      timeBarContainer: {
        backgroundColor:transparent,
        position: 'absolute',
        bottom: windowHeight * 0.07,
        width: windowWidth,
        color:white
      },
      slider: {
        width: '100%',
        color:black
      },
    });

    export default homeStyles;
