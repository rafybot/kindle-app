import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.pageView}>
      <Text style={styles.greetings}>Meu Perfil</Text>
      <View style={{marginTop: '1em', alignItems: 'center'}}>
        <Image style={styles.profilePhoto} source={require('../assets/profile_photo.jpg')} />
        <Button mode="contained"
                color="#3171B9"
                labelStyle={{color: "#f0f0f0", marginHorizontal: 7, marginVertical: 6}}
                style={{minWidth: 30,  width: 30, height: 30, borderRadius: 80, marginTop: -24, marginLeft: 60 }}>
                <MaterialCommunityIcons name="pencil" size={18} />
        </Button>
        <View style={styles.viewInfo}>
          <Text style={styles.titleInfo}>Nome</Text>
          <Text style={styles.textInfo}>Rafaela Martins</Text>

          <Text style={styles.titleInfo}>E-mail</Text>
          <Text style={styles.textInfo}>rafabemartins@gmail.com</Text>

          <Text style={styles.titleInfo}>Endereço</Text>
          <Text style={styles.textInfo}>São Paulo, SP</Text>
        </View>
        <Button mode="contained"
                color="#3171B9"
                labelStyle={{color: "#f0f0f0", fontSize: 12, letterSpacing: 0.2, fontWeight: 'bold'}}
                style={{borderRadius: 80}}>
                <MaterialCommunityIcons name="pencil" size={14} style={{marginRight: 4}} />
                Editar Perfil
        </Button>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    alignItems: 'left',
    textAlign: 'left',
    padding: 20,
    backgroundColor: '#121212'
  },
  greetings: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#fff',
    paddingVertical: 6
  },
  profilePhoto: {
    width: '80px',
    height: '80px',
    borderRadius: 50
  },
  viewInfo: {
    textAlign: 'center',
    marginVertical: 16
  },
  textInfo: {
    color: '#fff',
    marginBottom: 12
  },
  titleInfo: {
    color: '#FFB23A',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '10px'
  }
});
