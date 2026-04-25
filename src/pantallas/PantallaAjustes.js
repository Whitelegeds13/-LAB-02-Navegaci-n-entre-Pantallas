import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import CabeceraPersonalizada from '../componentes/CabeceraPersonalizada';
import colores from '../tema/colores';

export default function PantallaAjustes() {
  const [esModoOscuro, setEsModoOscuro] = useState(false);
  const [fuenteDislexia, setFuenteDislexia] = useState(true);
  const [recordatoriosTareas, setRecordatoriosTareas] = useState(true);
  const [alertasCalendario, setAlertasCalendario] = useState(false);

  const alternarInterruptor = (setter) => () => setter(estadoAnterior => !estadoAnterior);

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <CabeceraPersonalizada titulo="" mostrarAtras={true} />
      
      <ScrollView contentContainerStyle={estilos.contenedorScroll}>
        <View style={estilos.contenedorTituloCabecera}>
          <Text style={estilos.tituloPrincipal}>Configuración</Text>
          <Text style={estilos.subtitulo}>Gestiona tu experiencia académica y preferencias de seguridad.</Text>
        </View>

        {/* Apariencia Section */}
        <View style={estilos.tarjetaSeccion}>
          <View style={estilos.cabeceraSeccion}>
            <Ionicons name="color-palette" size={24} color={colores.primario} style={estilos.iconoSeccion} />
            <Text style={estilos.tituloSeccion}>Apariencia</Text>
          </View>

          <View style={estilos.filaAjuste}>
            <View style={estilos.contenedorTextoAjuste}>
              <Text style={estilos.tituloAjuste}>Modo oscuro</Text>
              <Text style={estilos.descAjuste}>Reduce la fatiga visual en entornos oscuros</Text>
            </View>
            <Switch
              trackColor={{ false: '#e0e0e0', true: colores.primarioClaro }}
              thumbColor={esModoOscuro ? colores.primario : '#f4f3f4'}
              onValueChange={alternarInterruptor(setEsModoOscuro)}
              value={esModoOscuro}
            />
          </View>

          <View style={estilos.filaAjuste}>
            <View style={estilos.contenedorTextoAjuste}>
              <Text style={estilos.tituloAjuste}>Fuente para dislexia</Text>
              <Text style={estilos.descAjuste}>OpenDyslexic para mejorar la legibilidad</Text>
            </View>
            <Switch
              trackColor={{ false: '#e0e0e0', true: colores.primarioClaro }}
              thumbColor={fuenteDislexia ? colores.primario : '#f4f3f4'}
              onValueChange={alternarInterruptor(setFuenteDislexia)}
              value={fuenteDislexia}
            />
          </View>
        </View>

        {/* Notificaciones Section */}
        <View style={estilos.tarjetaSeccion}>
          <View style={estilos.cabeceraSeccion}>
            <View style={estilos.fondoIcono}>
              <Ionicons name="notifications" size={20} color={colores.primario} />
            </View>
            <Text style={estilos.tituloSeccion}>Notificaciones</Text>
          </View>

          <View style={estilos.filaAjuste}>
            <Text style={estilos.tituloAjuste}>Recordatorios de tareas</Text>
            <Switch
              trackColor={{ false: '#e0e0e0', true: colores.primarioClaro }}
              thumbColor={recordatoriosTareas ? colores.primario : '#f4f3f4'}
              onValueChange={alternarInterruptor(setRecordatoriosTareas)}
              value={recordatoriosTareas}
            />
          </View>

          <View style={estilos.filaAjuste}>
            <Text style={estilos.tituloAjuste}>Alertas de calendario</Text>
            <Switch
              trackColor={{ false: '#e0e0e0', true: colores.primarioClaro }}
              thumbColor={alertasCalendario ? colores.primario : '#f4f3f4'}
              onValueChange={alternarInterruptor(setAlertasCalendario)}
              value={alertasCalendario}
            />
          </View>
        </View>

        {/* Seguridad Section */}
        <View style={estilos.tarjetaSeccion}>
          <View style={estilos.cabeceraSeccion}>
            <View style={estilos.fondoIcono}>
              <Ionicons name="shield-checkmark" size={20} color={colores.primario} />
            </View>
            <Text style={estilos.tituloSeccion}>Seguridad y Cuenta</Text>
          </View>

          <TouchableOpacity style={estilos.filaAjusteClicable}>
            <Ionicons name="lock-closed-outline" size={20} color={colores.texto} style={estilos.iconoElemento} />
            <Text style={estilos.tituloAjusteClicable}>Cambiar contraseña</Text>
            <Ionicons name="chevron-forward" size={20} color={colores.textoClaro} />
          </TouchableOpacity>

          <TouchableOpacity style={estilos.filaAjusteClicable}>
            <Ionicons name="finger-print-outline" size={20} color={colores.texto} style={estilos.iconoElemento} />
            <Text style={estilos.tituloAjusteClicable}>Autenticación biométrica</Text>
            <Ionicons name="chevron-forward" size={20} color={colores.textoClaro} />
          </TouchableOpacity>

          <TouchableOpacity style={estilos.filaAjusteClicable}>
            <Ionicons name="hardware-chip-outline" size={20} color={colores.texto} style={estilos.iconoElemento} />
            <Text style={estilos.tituloAjusteClicable}>Sesiones activas</Text>
            <Ionicons name="chevron-forward" size={20} color={colores.textoClaro} />
          </TouchableOpacity>

          <TouchableOpacity style={estilos.filaAjusteClicable}>
            <Ionicons name="close-circle-outline" size={20} color={colores.textoError} style={estilos.iconoElemento} />
            <Text style={[estilos.tituloAjusteClicable, { color: colores.textoError }]}>Eliminar cuenta</Text>
          </TouchableOpacity>
        </View>

        {/* Help Card */}
        <View style={estilos.tarjetaAyuda}>
          <Text style={estilos.tituloAyuda}>¿Necesitas ayuda?</Text>
          <Text style={estilos.textoAyuda}>
            Consulta nuestra base de conocimientos o contacta con soporte técnico.
          </Text>
          
          <View style={estilos.filaBotonesAyuda}>
            <TouchableOpacity style={estilos.botonSecundarioAyuda}>
              <Text style={estilos.textoBotonSecundarioAyuda}>CENTRO DE AYUDA</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={estilos.botonPrimarioAyuda}>
              <Text style={estilos.textoBotonPrimarioAyuda}>SOPORTE</Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: colores.texto,
  },
  subtitulo: {
    fontSize: 14,
    color: colores.textoClaro,
    marginTop: 5,
    lineHeight: 20,
  },
  tarjetaSeccion: {
    backgroundColor: colores.blanco,
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  cabeceraSeccion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  fondoIcono: {
    backgroundColor: colores.primarioClaro,
    padding: 8,
    borderRadius: 8,
    marginRight: 10,
  },
  iconoSeccion: {
    backgroundColor: colores.primarioClaro,
    padding: 5,
    borderRadius: 8,
    marginRight: 10,
    overflow: 'hidden',
  },
  tituloSeccion: {
    fontSize: 16,
    color: colores.texto,
    fontWeight: 'bold',
  },
  filaAjuste: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colores.fondo,
  },
  filaAjusteClicable: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: colores.fondo,
  },
  contenedorTextoAjuste: {
    flex: 1,
    paddingRight: 10,
  },
  tituloAjuste: {
    fontSize: 16,
    color: colores.texto,
    fontWeight: '500',
  },
  descAjuste: {
    fontSize: 12,
    color: colores.textoClaro,
    marginTop: 4,
  },
  iconoElemento: {
    marginRight: 15,
  },
  tituloAjusteClicable: {
    flex: 1,
    fontSize: 16,
    color: colores.texto,
    fontWeight: '500',
  },
  tarjetaAyuda: {
    backgroundColor: colores.fondo,
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  tituloAyuda: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 5,
  },
  textoAyuda: {
    fontSize: 14,
    color: colores.textoClaro,
    lineHeight: 20,
    marginBottom: 20,
  },
  filaBotonesAyuda: {
    flexDirection: 'row',
    gap: 10,
  },
  botonSecundarioAyuda: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  textoBotonSecundarioAyuda: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colores.textoClaro,
  },
  botonPrimarioAyuda: {
    flex: 1,
    backgroundColor: colores.primario,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  textoBotonPrimarioAyuda: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colores.blanco,
  }
});
