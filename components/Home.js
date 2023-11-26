import React from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

const dataMangas = [
  { id: '1', title: 'Hunter x Hunter - Vol. 1', price:'R$24,99', image: require('../assets/mangas/hunter.jpg') },
  { id: '2', title: 'Oyasumi Punpun - Vol. 1', price:'R$45,99', image: require('../assets/mangas/punpun.jpg') },
  { id: '3', title: 'Chainsaw Man - Vol 12', price:'R24,99', image: require('../assets/mangas/chainsaw.jpg') },
  { id: '4', title: 'Jojo\'s Bizarre Adventure', price:'R$74,99', image: require('../assets/mangas/jojo.jpg') },
];

const dataFilosofia = [
  { id: '1', title: 'Os Irmãos Karamázov', price:'R$24,99', image: require('../assets/filosofia/karamazov.jpg') },
  { id: '2', title: 'O Manifesto do Partido Comunista', price:'R$22,99', image: require('../assets/filosofia/manifesto.jpg') },
  { id: '3', title: 'Anticristo - Ecce Homo', price:'R24,99', image: require('../assets/filosofia/ecce_homo.jpg') },
  { id: '4', title: 'Arte da Guerra', price:'R$32,99', image: require('../assets/filosofia/arte_guerra.jpeg') },
];

const dataRomance = [
  { id: '1', title: 'Orgulho e Preconceito', price:'R$34,99', image: require('../assets/romances/Orgulho_E_Preconceito.jpg') },
  { id: '2', title: 'A Seleção', price:'R$39,99', image: require('../assets/romances/A_Selecao.jpg') },
  { id: '3', title: 'Tartarugas Até Lá Embaixo', price:'R24,99', image: require('../assets/romances/Tartarugas_embaixo.jpg') },
  { id: '4', title: 'Vermelho, Branco e Sangue Azul', price:'R$34,99', image: require('../assets/romances/vermelho_branco.jpg') },
];

function MangaBooksList() {
  return (
    <View>
      <FlatList
        data={dataMangas}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={{ padding: 10, width: '200px', alignItems: 'center', flexDirection: 'row' }}>
          <Image style={styles.bookImage} source={(item.image)} />
            <View style={{flexDirection: 'column', textAlign: 'left', width: '100px', justifyContent: 'space-between'}}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Button mode="contained"
                color="#3171B9"
                labelStyle={{color: "#f0f0f0", fontSize: '12px', fontWeight: 'bold', letterSpacing: 0.5, margin: 10}}
                style={{ width: 90, borderRadius: 15, marginLeft: 10, marginTop: 10 }}>
                Comprar
              </Button>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

function FilosofiaBooksList() {
  return (
    <View>
      <FlatList
        data={dataFilosofia}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={{ padding: 10, width: '200px', alignItems: 'center', flexDirection: 'row' }}>
          <Image style={styles.bookImage} source={(item.image)} />
            <View style={{flexDirection: 'column', textAlign: 'left', width: '100px', justifyContent: 'space-between'}}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Button mode="contained"
                color="#3171B9"
                labelStyle={{color: "#f0f0f0", fontSize: '12px', fontWeight: 'bold', letterSpacing: 0.5, margin: 10}}
                style={{ width: 90, borderRadius: 15, marginLeft: 10, marginTop: 10 }}>
                Comprar
              </Button>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

function RomanceBooksList() {
  return (
    <View>
      <FlatList
        data={dataRomance}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={{ padding: 10, width: '200px', alignItems: 'center', flexDirection: 'row' }}>
          <Image style={styles.bookImage} source={(item.image)} />
            <View style={{flexDirection: 'column', textAlign: 'left', width: '90px', justifyContent: 'space-between'}}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Button mode="contained"
                color="#3171B9"
                labelStyle={{color: "#f0f0f0", fontSize: '12px', fontWeight: 'bold', letterSpacing: 0.5, margin: 10}}
                style={{ width: 90, borderRadius: 15, marginLeft: 10, marginTop: 10 }}>
                Comprar
              </Button>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default function HomeScreen() {
  return (
    <ScrollView style={styles.pageView}>
      <Text style={styles.greetings}>Bem-vindo, usuário :)</Text>
      <Text style={styles.paragraph}>Temos novas sugestões de leitura para você, vem conferir!</Text>

      <View style={{marginTop: '2.4em'}}>
        <Text style={styles.titleCategoria}>Mangás & HQs</Text>
        <Text style={{height: '2px', backgroundColor: '#FFB23A'}}></Text>
        <MangaBooksList />
      </View>

      <View style={{marginTop: '2.4em'}}>
        <Text style={styles.titleCategoria}>Filosofia</Text>
        <Text style={{height: '2px', backgroundColor: '#FFB23A'}}></Text>
        <FilosofiaBooksList />
      </View>

      <View style={{marginTop: '2.4em'}}>
        <Text style={styles.titleCategoria}>Romance</Text>
        <Text style={{height: '2px', backgroundColor: '#FFB23A'}}></Text>
        <RomanceBooksList />
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
    width: '50vw',
    paddingVertical: 6
  },
  paragraph: {
    fontSize: '14px',
    color: '#e8e8e8',
  },
  titleCategoria: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#f0f0f0',
    paddingBottom: 2,
  },
  title: {
    fontSize: '14px',
    color: '#f0f0f0',
    paddingLeft: 10
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#f0f0f0',
    paddingLeft: 10
  },
  bookImage: {
    maxHeight: '120px',
    width: '80px',
  }
});
