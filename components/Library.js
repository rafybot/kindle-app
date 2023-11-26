import React from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const dataBiblioteca = [
  { id: '1', title: 'Hunter x Hunter - Vol. 1', percentRead: '60%', image: require('../assets/mangas/hunter.jpg') },
  { id: '2', title: 'Os Irmãos Karamázov', percentRead: '52%', image: require('../assets/filosofia/karamazov.jpg') },
  { id: '3', title: 'O Manifesto do Partido Comunista', percentRead: '72%', image: require('../assets/filosofia/manifesto.jpg') },
  { id: '4', title: 'Anticristo - Ecce Homo', percentRead: '0%', image: require('../assets/filosofia/ecce_homo.jpg') },
  { id: '4', title: 'A Arte da Guerra', percentRead: '58%', image: require('../assets/filosofia/arte_guerra.jpeg') },
  { id: '5', title: 'Vermelho, Branco e Sangue Azul', percentRead: '90%', image: require('../assets/romances/vermelho_branco.jpg') },
];

function BooksList() {
  return (
    <View style={{ alignItems: 'center'}}>
      <FlatList
        data={dataBiblioteca}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.itemList}>
          <Image style={styles.bookImage} source={(item.image)} />
            <Text style={{height: '6px', backgroundColor: '#FFB23A', width: item.percentRead}}></Text>
            <Button mode="contained"
              color="#3171B9"
              labelStyle={{color: "#f0f0f0", fontSize: '10px', margin: 6}}
              style={{minWidth: 28,  width: 28, borderRadius: 80, marginTop: -16, marginLeft: 2 }}>
              <MaterialCommunityIcons name="play" size={16} />
            </Button>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default function LibraryScreen() {
  return (
    <ScrollView style={styles.pageView}>
      <Text style={styles.greetings}>Minha Biblioteca</Text>
      <View style={{marginTop: '1em'}}>
        <BooksList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'left',
    padding: 20,
    backgroundColor: '#121212'
  },
  greetings: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#fff',
    padding: 6
  },
  itemList: {
    flexDirection: 'column',
    width: '96px',
    marginBottom: 12,
    textAlign: 'center',
    padding: 6
  },
  title: {
    fontSize: '10px',
    color: '#f0f0f0',
    textAlign: 'center',
    width: '100%',
    marginTop: 2
  },
  bookImage: {
    maxHeight: '134px',
    maxWidth: '90px',
  }
});
