import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Accounts from "./src/Accounts";
import Users from "./src/Users";
import Students from "./src/Students";
import { NavigationContainer } from '@react-navigation/native';
 import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
 import Ionicons from 'react-native-vector-icons/Ionicons';


 const Tab = createMaterialBottomTabNavigator();
 function AccountsScreen() {
  return (
    <Accounts/>
  );
}
function UsersScreen() {
  return (
    <Users/>
  );
}
function StudentsScreen() {
  return (
  <Students/>
  );
}


export default function App() {
  return (
      <NavigationContainer> 
        <Tab.Navigator initialRouteName="Accounts"  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused}) => {
            let iconName;

            if (route.name === 'Accounts') {
              iconName = focused
                ? 'person-circle'
                : 'person-circle-outline';
            } else if (route.name === 'User') {
              iconName = focused ? 'people': 'people-outline';
            }else if (route.name === 'Students'){
              iconName = focused ? 'school': 'school-outline';
            }
            return <Ionicons name={iconName} size={30} color={'#4e85bf'} />;
          },
          
        })}
      > 
        <Tab.Screen name= "Accounts" component={AccountsScreen}/>
        <Tab.Screen name= "User"  component={UsersScreen}/> 
        <Tab.Screen name= "Students" component={StudentsScreen}/>
      </Tab.Navigator>
      <StatusBar style="auto" />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
