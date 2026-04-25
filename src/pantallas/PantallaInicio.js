import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import CabeceraPersonalizada from '../componentes/CabeceraPersonalizada';
import colores from '../tema/colores';

export default function PantallaInicio({ navigation }) {
  const { width } = useWindowDimensions();
  const esPantallaGrande = width >= 768; // Detección de diseño Web/Tablet

  const tareas = [
    { titulo: 'Lectura: "Paradigma del siglo XXI"', subtitulo: 'Filosofía • 15 min', completada: false },
    { titulo: 'Organizar bibliografía Mendeley', subtitulo: 'General • 10 min', completada: false },
    { titulo: 'Repasar glosario de términos', subtitulo: 'Inglés Técnico • 20 min', completada: false },
  ];

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <CabeceraPersonalizada titulo="AcademiaFlow" mostrarMenu={true} mostrarCampana={true} />
      
      <ScrollView contentContainerStyle={estilos.contenedorScroll}>
        <View style={estilos.contenedorTituloCabecera}>
          <Text style={estilos.tituloPrincipal}>Hoy</Text>
          <Text style={estilos.subtitulo}>Tienes 4 consultas críticas para hoy.</Text>
        </View>

        <View style={[estilos.contenedorConsultas, esPantallaGrande && estilos.disenoFila]}>
          <View style={[estilos.tarjetaConsulta, esPantallaGrande && estilos.mediaTarjeta]}>
            <View style={estilos.etiquetaTarjetaCritica}>
              <Text style={estilos.textoEtiquetaCritica}>! CRÍTICO</Text>
            </View>
            <Text style={estilos.textoHora}>10:30 AM</Text>
            <Text style={estilos.tituloConsulta}>Revisión de Tesis: Capítulo 3</Text>
            <Text style={estilos.subtituloConsulta}>Prof. Martínez - Sala 402B</Text>
          </View>

          <View style={[estilos.tarjetaConsulta, esPantallaGrande && estilos.mediaTarjeta]}>
            <View style={estilos.etiquetaTarjetaLaboratorio}>
              <Text style={estilos.textoEtiquetaLaboratorio}>LABORATORIO</Text>
            </View>
            <Text style={estilos.textoHora}>02:00 PM</Text>
            <Text style={estilos.tituloConsulta}>Consulta de Química Orgánica</Text>
            <Text style={estilos.subtituloConsulta}>Análisis de espectrometría</Text>
          </View>
        </View>

        <View style={estilos.cabeceraRutina}>
          <Text style={estilos.tituloSeccion}>Rutina Diaria</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Tareas')}>
            <Text style={estilos.textoEnlace}>Ver Tareas →</Text>
          </TouchableOpacity>
        </View>

        <View style={estilos.contenedorTareas}>
          {tareas.map((tarea, index) => (
            <View key={index} style={estilos.tarjetaTarea}>
              <TouchableOpacity style={estilos.casillaVerificacion}>
                <Ionicons name="ellipse-outline" size={24} color={colores.primario} />
              </TouchableOpacity>
              <View style={estilos.contenedorTextoTarea}>
                <Text style={estilos.tituloTarea}>{tarea.titulo}</Text>
                <Text style={estilos.subtituloTarea}>{tarea.subtitulo}</Text>
              </View>
              <Ionicons name="grid" size={20} color="#ddd" />
            </View>
          ))}
        </View>

        <View style={estilos.tarjetaAyuda}>
          <View style={estilos.contenedorIconoAyuda}>
            <Ionicons name="school" size={60} color={colores.blanco} opacity={0.2} style={{ position: 'absolute', top: -10, left: -10 }} />
          </View>
          <View style={estilos.contenedorTextoAyuda}>
            <Text style={estilos.tituloAyuda}>¿Necesitas ayuda con tus tareas?</Text>
            <Text style={estilos.descripcionAyuda}>
              Revisa el calendario académico actualizado para no perder ninguna entrega.
            </Text>
            <TouchableOpacity style={estilos.botonAyuda} onPress={() => navigation.navigate('Tareas')}>
              <Text style={estilos.textoBotonAyuda}>Ir a Tareas</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={estilos.botonMas}>
            <Ionicons name="add" size={24} color={colores.blanco} />
          </TouchableOpacity>
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
  contenedorTituloCabecera: {
    marginBottom: 20,
  },
  tituloPrincipal: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colores.primario,
  },
  subtitulo: {
    fontSize: 16,
    color: colores.textoClaro,
    marginTop: 5,
  },
  contenedorConsultas: {
    flexDirection: 'column',
    gap: 15,
    marginBottom: 30,
  },
  disenoFila: {
    flexDirection: 'row',
  },
  mediaTarjeta: {
    flex: 1,
  },
  tarjetaConsulta: {
    backgroundColor: colores.blanco,
    borderRadius: 15,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: colores.borde,
  },
  etiquetaTarjetaCritica: {
    backgroundColor: colores.error,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  textoEtiquetaCritica: {
    color: colores.textoError,
    fontSize: 10,
    fontWeight: 'bold',
  },
  etiquetaTarjetaLaboratorio: {
    backgroundColor: colores.primarioClaro,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  textoEtiquetaLaboratorio: {
    color: colores.primario,
    fontSize: 10,
    fontWeight: 'bold',
  },
  textoHora: {
    position: 'absolute',
    right: 15,
    top: 15,
    fontSize: 12,
    fontWeight: 'bold',
    color: colores.textoClaro,
  },
  tituloConsulta: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 5,
    width: '80%',
  },
  subtituloConsulta: {
    fontSize: 14,
    color: colores.textoClaro,
  },
  cabeceraRutina: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  tituloSeccion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colores.texto,
  },
  textoEnlace: {
    color: colores.primario,
    fontWeight: 'bold',
  },
  contenedorTareas: {
    gap: 10,
    marginBottom: 30,
  },
  tarjetaTarea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colores.blanco,
    padding: 15,
    borderRadius: 15,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  casillaVerificacion: {
    marginRight: 15,
  },
  contenedorTextoTarea: {
    flex: 1,
  },
  tituloTarea: {
    fontSize: 16,
    fontWeight: '600',
    color: colores.texto,
  },
  subtituloTarea: {
    fontSize: 12,
    color: colores.textoClaro,
    marginTop: 2,
  },
  tarjetaAyuda: {
    backgroundColor: colores.primario,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
  },
  contenedorIconoAyuda: {
    width: 0, // El icono tiene posicionamiento absoluto
  },
  contenedorTextoAyuda: {
    flex: 1,
    paddingRight: 20,
    zIndex: 1,
  },
  tituloAyuda: {
    color: colores.blanco,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descripcionAyuda: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  botonAyuda: {
    backgroundColor: colores.primarioClaro,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  textoBotonAyuda: {
    color: colores.primario,
    fontWeight: 'bold',
  },
  botonMas: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 30,
    height: 30,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  }
});
