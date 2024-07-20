import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const NavigationTabBar: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor:"#000000"
          },
/*           navigationOptions: { title: 'Header title' },
 */       /*    header: () => (
            <header title="Home123" />
          ), */
          tabBarIcon: ({ focused, color, size }) => {
            let iconName="";

            if (route.name === 'Accueil') {
              iconName = focused
                ? 'home-outline'
                : 'home-sharp';
            } else if (route.name === 'Amis') {
              iconName = focused ? 'people-outline' : 'people-sharp';
            } else if (route.name === '#') {
              iconName = focused ? 'add-circle-sharp' : 'add-circle-sharp';
            }  else if (route.name === 'Boite de réception') {
              iconName = focused ? 'chatbox-ellipses-outline' : 'chatbox-ellipses-sharp';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person-outline' : 'person-sharp';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        
        
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Amis" component={SettingsScreen} />
        <Tab.Screen name="#" component={SettingsScreen} />
        <Tab.Screen name="Boite de réception" component={SettingsScreen} />
        <Tab.Screen name="Profil" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationTabBar;
