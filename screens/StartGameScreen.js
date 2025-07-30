import { TextInput, View, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';

export function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType='number-pad' 
                autoCapitalize='none' 
                autoCorrect={false}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#660C3DFF',
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#440528FF',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: '#DF9E26FF',
        borderBottomWidth: 2,
        color: '#DF9E26FF',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    }
})