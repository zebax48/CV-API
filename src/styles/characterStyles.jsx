import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        width: 150,
        padding: 15,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    info: {
        color: '#555',
    },
    characterList: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 15,
    },
    container: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 40,
    },
    pageInfo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
});

export default styles;