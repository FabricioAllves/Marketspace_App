import React from 'react'
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

import { Routes } from '@routes/index';
import { AuthContextProvider } from '@contexts/AuthContext';


export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular, Karla_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>

      <StatusBar
        barStyle='dark-content'
        backgroundColor="#EDECEE"
        translucent
      />
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  );
}


