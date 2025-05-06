import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/characterStyles';
import { useNavigation } from '@react-navigation/native';


export default function CharacterCard({ character }) {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.info}>{character.status} - {character.species}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Planet', { url: character.location.url })}>
        <Text style={styles.info}>{character.location.name}</Text>
      </TouchableOpacity>
    </View>
  );
}