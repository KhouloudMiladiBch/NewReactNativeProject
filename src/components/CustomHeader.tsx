import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Route, TabView, TabBar, TabBarProps } from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { black, white, windowWidth } from '../utils';
import headerStyles from '../styles/Header';

interface CustomHeaderProps {
  title: string;
}

/* const FirstRoute = () => (
    <View style={headerStyles.scene}>
      <Text style={headerStyles.text}>Following</Text>
    </View>
  );
  
  const SecondRoute = () => (
    <View style={headerStyles.scene}>
      <Text style={headerStyles.text}>For you</Text>
    </View>
  ); */
  
  
const initialLayout = { width: Dimensions.get('window').width * 0.5 ,};

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {

    const [index, setIndex] = React.useState(1);
    const [routes] = React.useState<Route[]>([
      { key: 'first', title: 'Following' },
      { key: 'second', title: 'For you' },
    ]);
  
    const renderScene = ({ route }: { route: Route }) => {
      
     /*  switch (route.key) {
        case 'first':
          return <FirstRoute/>;
        case 'second':
          return <SecondRoute />;
        default:
          return <SecondRoute />;
      } */
     return null;
    };
  
    const renderTabBar = (props: TabBarProps<Route>) => (
      <TabBar
        {...props}
        indicatorStyle={headerStyles.indicator}
        style={headerStyles.tabBar}
        labelStyle={headerStyles.label}
        
        /* tabStyle= {{
            paddingVertical: 5
        }} */
      />
    );
  return (
    <View style={headerStyles.headerContainer}>
      <TouchableOpacity>
        <Text style={headerStyles.buttonText}>Live</Text>
      </TouchableOpacity>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
      <Ionicons name={'search'} size={windowWidth*0.05} color={white} />      
    </View>
  );
};



export default CustomHeader;
