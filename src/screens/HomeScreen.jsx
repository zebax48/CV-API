import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, ScrollView } from 'react-native';
import { fetchCharacters } from '../api/rickAndMortyApi';
import CharacterList from '../components/CharacterList';
import styles from '../styles/characterStyles';

export default function HomeScreen() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const loadCharacters = async (pageToLoad = 1) => {
    setLoading(true);
    try {
      const data = await fetchCharacters(pageToLoad);
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters(page);
  }, [page]);

  const handleNext = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Rick and Morty</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : <CharacterList characters={characters} />
      }

      <View style={styles.pagination}>
        <Button title="Prev" onPress={handlePrevious} disabled={page === 1} />
        <Text style={styles.pageInfo}>Page {page} of {totalPages}</Text>
        <Button title="Next" onPress={handleNext} disabled={page === totalPages} />
      </View>
    </ScrollView>
  );
}