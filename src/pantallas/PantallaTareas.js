import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CabeceraPersonalizada from '../componentes/CabeceraPersonalizada';
import colores from '../tema/colores';

export default function PantallaTareas() {
  return (
    <SafeAreaView style={estilos.areaSegura}>
      <CabeceraPersonalizada titulo="Tareas" mostrarMenu={true} />
      <View style={estilos.contenedor}>
        <Text style={estilos.titulo}>Mis Tareas</Text>
        <Text style={estilos.subtitulo}>Pronto podrás gestionar tus tareas completas aquí.</Text>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colores.primario,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: colores.textoClaro,
    textAlign: 'center',
  }
});
