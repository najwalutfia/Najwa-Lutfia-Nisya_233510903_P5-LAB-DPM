import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import KartuKucing from '../components/CatCard';

const kucing = [
  {
    id: 1,
    nama: 'British Shorthair',
    deskripsi: 'Kucing Berbulu Pendek yang ceria dan penasaran.',
    gambar: require('../../assets/image/british.webp'),
  },
  {
    id: 2,
    nama: 'Persia',
    deskripsi: 'Kucing Berbulu Panjang yang berani dan gagah.',
    gambar: require('../../assets/image/persiaa.webp'),
  },
  {
    id: 3,
    nama: 'Sphynx',
    deskripsi: 'Kucing Tidak Berbulu yang tenang dan penuh kasih.',
    gambar: require('../../assets/image/Sphynx.avif'),
  },
  {
    id: 4,
    nama: 'Himalaya',
    deskripsi: 'Kucing Berbulu Tebal yang penyayang dan penurut.',
    gambar: require('../../assets/image/himalaya.jpg'),
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <>
      <Appbar.Header style={{ backgroundColor: '#FFB6C1' }}>
        <Appbar.Content title="Galeri Kucing 🐱" titleStyle={{ color: '#fff', fontWeight: 'bold' }} />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        {kucing.map((k) => (
          <KartuKucing
            key={k.id}
            nama={k.nama}
            deskripsi={k.deskripsi}
            gambar={k.gambar} 
            onPress={() => navigation.navigate('Detail', { kucing: k })}  
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#FFF8DC',
  },
});
