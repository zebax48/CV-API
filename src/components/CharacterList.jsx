import React from 'react';
import { View } from 'react-native';
import CharacterCard from './CharacterCard';
import styles from '../styles/characterStyles';

export default function CharacterList({ characters }) {
  return (
    <View style={styles.characterList}>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </View>
  );
}