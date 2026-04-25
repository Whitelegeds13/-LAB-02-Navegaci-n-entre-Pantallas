import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colores from '../tema/colores';
import { useNavigation } from '@react-navigation/native';

/*
 * Objetivo Académico 4: Personalizar headers.
 * Este componente es un cabezal genérico y reutlizable. 
 * Expone props para mostrar el menú hamburguesa que abre el Drawer Navigator,
 * manejar la flecha de retroceso (Stack view behavior), y el estado de notificaciones.
 */
export default function CabeceraPersonalizada({ titulo, mostrarMenu = false, mostrarAtras = false, mostrarCampana = false }) {
  const navigation = useNavigation();

  return (
    <View style={estilos.cabecera}>
      {mostrarMenu ? (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={estilos.botonIcono}>
          <Ionicons name="menu" size={28} color={colores.primario} />
        </TouchableOpacity>
      ) : mostrarAtras ? (
        <TouchableOpacity onPress={() => navigation.goBack()} style={estilos.botonIcono}>
          <Ionicons name="arrow-back" size={28} color={colores.primario} />
        </TouchableOpacity>
      ) : (
        <View style={estilos.botonIcono} />
      )}

      <Text style={estilos.titulo}>{titulo}</Text>

      {mostrarCampana ? (
        <TouchableOpacity style={estilos.botonIcono}>
          <Ionicons name="notifications" size={24} color={colores.primario} />
        </TouchableOpacity>
      ) : (
        <View style={estilos.botonIcono} />
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  cabecera: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: colores.fondo,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colores.primario,
  },
  botonIcono: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
