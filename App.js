import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavegadorLateral from './src/navegacion/NavegadorLateral';
import { StatusBar } from 'expo-status-bar';

/*
 * Objetivo Académico 2 y 3: Configurar React Navigation e Implementar Navegación Anidada.
 * NavigationContainer es el componente raíz que maneja el árbol de navegación.
 * Dentro de él, insertamos nuestro NavegadorLateral, el cual a su vez contendrá el NavegadorPestanas, 
 * logrando así la navegabilidad profunda requerida.
 */
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <NavegadorLateral />
    </NavigationContainer>
  );
}
