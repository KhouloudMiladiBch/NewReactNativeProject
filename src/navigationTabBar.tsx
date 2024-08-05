import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from './screens/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoListScreen from './screens/HomeScreen';
import CustomHeader from './components/CustomHeader';
import { black } from './utils';

const Tab = createBottomTabNavigator();

const NavigationTabBar: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabelStyle:{fontWeight:'bold',},
          headerTransparent: true,
          header: ({}) => (
            <CustomHeader title={route.name} />
          ),
          tabBarStyle: {
            backgroundColor:black,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName='';

            if (route.name === 'Home') {
              iconName = !focused
                ? 'home-outline'
                : 'home-sharp';
            } else if (route.name === 'Friends') {
              iconName = !focused ? 'people-outline' : 'people-sharp';
            } else if (route.name === 'Add') {
              iconName = !focused ? 'add-circle-outline' : 'add-circle-sharp';
            }  else if (route.name === 'Inbox') {
              iconName = !focused ? 'chatbox-ellipses-outline' : 'chatbox-ellipses-sharp';
            } else if (route.name === 'Profile') {
              iconName = !focused ? 'person-outline' : 'person-sharp';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'grey',
        })}
      >
        <Tab.Screen name="Home" component={VideoListScreen} />
        <Tab.Screen name="Friends" component={SettingsScreen} />
        <Tab.Screen 
          name="Add" 
          component={SettingsScreen} 
          options={{
            tabBarLabel: () => null,
          }}/>
        <Tab.Screen name="Inbox" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationTabBar;