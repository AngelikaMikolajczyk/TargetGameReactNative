import { Text, View, StyleSheet } from 'react-native';
import { Colors} from '../../constans/colors';

export function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary1,
        padding: 24,
        borderRadius: 6,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center' 
    },
    text: {
        color: Colors.secondary1,
        fontSize: 36,
        fontFamily: 'open-sans-bold'
    }
})