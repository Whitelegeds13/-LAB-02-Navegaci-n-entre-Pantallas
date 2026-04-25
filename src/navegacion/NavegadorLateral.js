import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import NavegadorPestanas from './NavegadorPestanas';
import PantallaAjustes from '../pantallas/PantallaAjustes';
import MenuLateralPersonalizado from './MenuLateralPersonalizado';
import colores from '../tema/colores';

const Drawer = createDrawerNavigator();

/*
 * Objetivo Académico 1: Entender los conceptos básicos de navegación.
 * El DrawerNavigator actúa como el "Contenedor Principal".
 * Objetivo Académico 4: Personalizar headers y botones.
 * Usamos la propiedad `drawerContent` para inyectar nuestro menú personalizado (MenuLateralPersonalizado).
 */
export default function NavegadorLateral() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuLateralPersonalizado {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colores.primarioClaro,
        drawerActiveTintColor: colores.primario,
        drawerInactiveTintColor: colores.texto,
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen 
        name="InicioTabs" 
        component={NavegadorPestanas} 
        options={{
          title: 'Inicio',
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Ajustes" 
        component={PantallaAjustes} 
        options={{
          title: 'Ajustes',
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
