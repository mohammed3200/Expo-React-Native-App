import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthProvider, useAuth } from './app/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screens/Home';
import Login from './app/screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}

export const Layout = () => {
  const { authState, onLogout } = useAuth()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState?.authenticated ?
          <Stack.Screen name="Home" component={Home} options={{
            headerRight: () => <Button onPress={onLogout} title='Log Out' />,
          }}></Stack.Screen>
          :
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
        }

      </Stack.Navigator>
    </NavigationContainer>
  )
}