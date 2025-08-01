import { Text, StyleSheet, Platform } from 'react-native';
import { Colors } from '../../constans/colors';

export function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: Colors.buttonText,
        textAlign: 'center',
        // two ways to set different options for platforms
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ios: 0, android: 2}),
        borderWidth: 2,
        borderColor: Colors.buttonText,
        padding: 12,
        borderRadius: 6,
        fontFamily: 'open-sans-bold',
        maxWidth: '80%',
        width: 300 
    }
})