import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Button, Appbar } from 'react-native-paper';

export default function DetailScreen({ route, navigation }) {
  const { kucing } = route.params; 

  return (
    <>
      <Appbar.Header style={{ backgroundColor: '#FFB6C1' }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={kucing.nama} titleStyle={{ color: '#fff', fontWeight: 'bold' }} />
      </Appbar.Header>

      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Cover source={kucing.gambar} style={styles.image} />
        </Card>

        <Text style={styles.name}>{`😺 ${kucing.nama}`}</Text>
        <Text style={styles.description}>{kucing.deskripsi}</Text>

        <Button
          mode="contained"
          onPress={() => alert('Meong! COMEL !')}
          style={styles.button}
        >
          Peluk {kucing.nama}
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF8DC', 
  },
  card: {
    width: '90%',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: 300,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF69B4', 
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF69B4',
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
