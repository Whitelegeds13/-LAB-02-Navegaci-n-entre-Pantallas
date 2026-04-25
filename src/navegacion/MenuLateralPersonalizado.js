import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import colores from '../tema/colores';

export default function MenuLateralPersonalizado(props) {
  return (
    <View style={{ flex: 1, backgroundColor: colores.blanco }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: colores.blanco }}>
        <View style={estilos.contenedorPerfil}>
          <View style={estilos.contenedorAvatar}>
            <Text style={estilos.textoAvatar}>R</Text>
          </View>
          <Text style={estilos.nombre}>Dr. David Flores</Text>
          <Text style={estilos.nombre}>Huerta</Text>
          <Text style={estilos.rol}>Profesional Académico</Text>
        </View>
        <View style={estilos.contenedorListaItems}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={estilos.pieDePagina}>
        <Text style={estilos.textoPieDePagina}>AcademiaFlow v2.4.0</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedorPerfil: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'flex-start',
    marginTop: 40, // Espacio para la barra de estado si no es manejado por SafeArea
  },
  contenedorAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colores.primario,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textoAvatar: {
    color: colores.blanco,
    fontSize: 24,
    fontWeight: 'bold',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colores.texto,
  },
  rol: {
    fontSize: 14,
    color: colores.textoClaro,
    marginTop: 5,
  },
  contenedorListaItems: {
    flex: 1,
    backgroundColor: colores.blanco,
    paddingTop: 10,
  },
  pieDePagina: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  textoPieDePagina: {
    fontSize: 12,
    color: colores.textoClaro,
    textAlign: 'center',
  }
});
