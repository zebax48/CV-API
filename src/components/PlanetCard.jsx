import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/characterStyles';

export default function PlanetCard({ planet }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{planet.name}</Text>
                  <Text style={styles.info}>Type: {planet.type}</Text>
                  <Text style={styles.info}>Dimension: {planet.dimension}</Text>
        </View>
    )
} 