import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import PantallaInicio from '../pantallas/PantallaInicio';
import PantallaTareas from '../pantallas/PantallaTareas';
import PantallaPerfil from '../pantallas/PantallaPerfil';
import colores from '../tema/colores';

const Tab = createBottomTabNavigator();

/*
 * Navegación anidada: Bottom Tab Navigator.
 * Dentro de la pantalla "Inicio" del Drawer, tenemos este Tab Navigator con 3 pestañas.
 * Los íconos y la personalización responden a los requerimientos de diseño (Home, Clipboard, Person).
 */
export default function NavegadorPestanas() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let nombreIcono;

          if (route.name === 'Inicio') {
            nombreIcono = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Tareas') {
            nombreIcono = focused ? 'clipboard' : 'clipboard-outline';
          } else if (route.name === 'Perfil') {
            nombreIcono = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={nombreIcono} size={size} color={color} />;
        },
        tabBarActiveTintColor: colores.primario,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: colores.blanco,
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        }
      })}
    >
      <Tab.Screen name="Inicio" component={PantallaInicio} />
      <Tab.Screen name="Tareas" component={PantallaTareas} />
      <Tab.Screen name="Perfil" component={PantallaPerfil} />
    </Tab.Navigator>
  );
}
