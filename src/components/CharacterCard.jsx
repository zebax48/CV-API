import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/characterStyles';

export default function CharacterCard({ character }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image}/>
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.info}>{character.status} - {character.species}</Text>
      <Text style={styles.info}>{character.location.name}</Text>
    </View>
  );
}