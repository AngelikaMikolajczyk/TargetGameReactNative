import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constans/colors';

export function GuessLogItem({roundNumber, guess}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary3,
        borderWidth: 2,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.secondary1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: Colors.primary4,
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText: {
        fontFamily: 'open-sans'
    }
})