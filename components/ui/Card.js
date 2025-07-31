import {View, StyleSheet } from 'react-native';
import { Colors } from '../../constans/colors';

export function Card({children}) {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
            padding: 16,
            marginTop: 36,
            marginHorizontal: 24,
            backgroundColor: Colors.primary3,
            borderRadius: 8,
            elevation: 4,
            shadowColor: Colors.primary4,
            shadowOffset: {width: 2, height: 2},
            shadowRadius: 6,
            shadowOpacity: 0.5,
            alignItems: 'center',
            justifyContent: 'center'
        },
})