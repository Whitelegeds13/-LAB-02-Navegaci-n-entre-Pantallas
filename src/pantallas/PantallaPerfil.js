import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import CabeceraPersonalizada from '../componentes/CabeceraPersonalizada';
import colores from '../tema/colores';

export default function PantallaPerfil({ navigation }) {
  const { width } = useWindowDimensions();
  const esPantallaGrande = width >= 768;

  const intereses = [
    { etiqueta: 'PLASTICIDAD NEURONAL', color: '#eaf8ef' },
    { etiqueta: 'APRENDIZAJE AUTOMÁTICO', color: '#eef0ff' },
    { etiqueta: 'PSICOLOGÍA CONDUCTUAL', color: '#f8f4ff' },
    { etiqueta: 'COGNICIÓN CUÁNTICA', color: '#f0faff' },
    { etiqueta: 'BIOÉTICA', color: '#f2fcee' },
  ];

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <CabeceraPersonalizada titulo="Perfil" mostrarMenu={true} mostrarCampana={true} />
      
      <ScrollView contentContainerStyle={estilos.contenedorScroll}>
        {/* Main Profile Card */}
        <View style={estilos.tarjetaPerfil}>
          <View style={estilos.envoltorioAvatar}>
            <View style={estilos.marcadorAvatar}>
              <Ionicons name="person" size={50} color={colores.blanco} />
            </View>
            <View style={estilos.insigniaEstado}>
              <Ionicons name="checkmark" size={12} color={colores.blanco} />
            </View>
          </View>
          
          <Text style={estilos.nombre}>Dr. David Flores Huerta</Text>
          <Text style={estilos.rol}>Investigadora Principal y Educadora Líder</Text>
          
          <View style={estilos.filaBotonesAccion}>
            <TouchableOpacity style={estilos.botonPrimario} onPress={() => navigation.navigate('Inicio')}>
              <Ionicons name="home" size={16} color={colores.blanco} style={estilos.iconoBoton} />
              <Text style={estilos.textoBotonPrimario}>Inicio</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={estilos.botonSecundario} onPress={() => navigation.navigate('Ajustes')}>
              <Ionicons name="settings" size={16} color={colores.textoClaro} style={estilos.iconoBoton} />
              <Text style={estilos.textoBotonSecundario}>Ajustes</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Row */}
        <View style={estilos.filaEstadisticas}>
          <View style={estilos.tarjetaEstadistica}>
            <View style={estilos.cabeceraEstadistica}>
              <Ionicons name="library-outline" size={20} color={colores.primario} />
              <Text style={estilos.etiquetaEstadistica}>DEPARTAMENTO</Text>
            </View>
            <Text style={estilos.valorEstadistica}>Neurociencia Cognitiva</Text>
          </View>
        </View>

        <View style={estilos.filaEstadisticas}>
          <View style={[estilos.tarjetaEstadistica, { flex: 1, marginRight: 10 }]}>
            <Text style={estilos.etiquetaEstadistica}>PUBLICACIONES</Text>
            <View style={estilos.filaValorEstadistica}>
              <Text style={estilos.numeroGrandeEstadistica}>42</Text>
              <Ionicons name="document-text-outline" size={24} color={colores.primario} />
            </View>
          </View>
          
          <View style={[estilos.tarjetaEstadistica, { flex: 1 }]}>
            <Text style={estilos.etiquetaEstadistica}>CITACIONES</Text>
            <View style={estilos.filaValorEstadistica}>
              <Text style={estilos.numeroGrandeAzulEstadistica}>1.2k</Text>
              <Ionicons name="trending-up" size={24} color="#4a70ff" />
            </View>
          </View>
        </View>

        {/* Interests Section */}
        <View style={estilos.contenedorSeccion}>
          <Text style={estilos.tituloSeccion}>INTERESES DE INVESTIGACIÓN</Text>
          <View style={estilos.contenedorChips}>
            {intereses.map((interes, idx) => (
              <View key={idx} style={[estilos.chip, { backgroundColor: interes.color }]}>
                <Text style={estilos.textoChip}>{interes.etiqueta}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Biography Section */}
        <View style={estilos.contenedorSeccion}>
          <Text style={estilos.tituloSeccion}>BIOGRAFÍA ACADÉMICA</Text>
          <Text style={estilos.textoBiografia}>
            Explorando la intersección de las redes neuronales y los procesos éticos de toma de decisiones en entornos colaborativos.
          </Text>
          <Text style={estilos.textoBiografia}>
            Actualmente liderando la iniciativa "MindFlow" en el Instituto Global de Investigación.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  contenedorScroll: {
    padding: 20,
    paddingBottom: 40,
  },
  tarjetaPerfil: {
    backgroundColor: colores.blanco,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  envoltorioAvatar: {
    position: 'relative',
    marginBottom: 15,
  },
  marcadorAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#1a2a3a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  insigniaEstado: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    backgroundColor: colores.primario,
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: colores.blanco,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colores.texto,
  },
  rol: {
    fontSize: 14,
    color: colores.textoClaro,
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'center',
  },
  filaBotonesAccion: {
    flexDirection: 'row',
    gap: 15,
  },
  botonPrimario: {
    backgroundColor: colores.primario,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  textoBotonPrimario: {
    color: colores.blanco,
    fontWeight: 'bold',
  },
  botonSecundario: {
    backgroundColor: colores.fondo,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  textoBotonSecundario: {
    color: colores.textoClaro,
    fontWeight: 'bold',
  },
  iconoBoton: {
    marginRight: 6,
  },
  filaEstadisticas: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  tarjetaEstadistica: {
    backgroundColor: colores.blanco,
    borderRadius: 15,
    padding: 15,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    flex: 1,
  },
  cabeceraEstadistica: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  etiquetaEstadistica: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colores.textoClaro,
    marginTop: 5,
    letterSpacing: 0.5,
  },
  valorEstadistica: {
    fontSize: 16,
    fontWeight: '600',
    color: colores.texto,
    marginTop: 5,
  },
  filaValorEstadistica: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  numeroGrandeEstadistica: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colores.primario,
  },
  numeroGrandeAzulEstadistica: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a70ff',
  },
  contenedorSeccion: {
    backgroundColor: colores.blanco,
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  tituloSeccion: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colores.textoClaro,
    letterSpacing: 0.5,
    marginBottom: 15,
  },
  contenedorChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  textoChip: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colores.primario,
  },
  textoBiografia: {
    fontSize: 14,
    color: colores.textoClaro,
    lineHeight: 22,
    marginBottom: 10,
  }
});
