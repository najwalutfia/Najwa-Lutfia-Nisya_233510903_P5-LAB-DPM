import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';

export default function KartuKucing({ nama, deskripsi, gambar, onPress }) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={gambar} style={styles.image} />
      <Card.Title title={`😻 ${nama}`} subtitle={deskripsi} titleStyle={styles.title} />
      <Card.Actions>
        <Button mode="contained" onPress={onPress} style={styles.button}>
          Lihat Detail
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 30,
    backgroundColor: '#FFF0F5',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    color: '#444',
  },
  button: {
    backgroundColor: '#FF69B4',
    borderRadius: 5,
  },
});
