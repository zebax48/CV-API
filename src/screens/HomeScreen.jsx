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
  const [statusFilter, setStatusFilter] = useState('');

  const loadCharacters = async (pageToLoad = 1) => {
    setLoading(true);
    try {
      const data = await fetchCharacters(pageToLoad, statusFilter);
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
  }, [page, statusFilter]);

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
      ) : 
        <View>
          <View style={{ flexDirection: 'row', gap: 10, marginBottom: 20, justifyContent: 'center' }}>
            <Button title="All" onPress={() => { setStatusFilter(''); setPage(1); }} color={statusFilter === '' ? 'gray' : 'blue'} />
            <Button title="Alive" onPress={() => { setStatusFilter('alive'); setPage(1); }} color={statusFilter === 'alive' ? 'gray' : 'blue'}/>
            <Button title="Dead" onPress={() => { setStatusFilter('dead'); setPage(1); }} color={statusFilter === 'dead' ? 'gray' : 'blue'}/>
            <Button title="Unknown" onPress={() => { setStatusFilter('unknown'); setPage(1); }} color={statusFilter === 'unknown' ? 'gray' : 'blue'}/>
          </View>
          <CharacterList characters={characters} navigation={navigation} />
        </View>
      }

      <View style={styles.pagination}>
        <Button title="Prev" onPress={handlePrevious} disabled={page === 1} />
        <Text style={styles.pageInfo}>Page {page} of {totalPages}</Text>
        <Button title="Next" onPress={handleNext} disabled={page === totalPages} />
      </View>
    </ScrollView>
  );
}