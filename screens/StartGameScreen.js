import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { useState } from 'react';
import { Colors } from '../constans/colors';
import { Title } from '../components/ui/Title';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/Instruction';

export function StartGameScreen({onPickedNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();

    function numberChangeHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetEnteredNumber() {
        setEnteredNumber('');
    }

    function confirmPress () {
        const choosenNumber = parseInt(enteredNumber);
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert(
                'Invalid Number!', 
                'Number has to be a number between 1 and 99.', 
                [{text: 'OK', style: 'destructive', onPress: resetEnteredNumber}])
            return;
        }
        onPickedNumber(choosenNumber);
    }

    const marginTop = height < 400 ? 50 : 100; 

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={[styles.screenContainer, {marginTop: marginTop}]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a number</InstructionText>
                        <TextInput 
                            style={styles.numberInput} 
                            maxLength={2} 
                            keyboardType='number-pad'
                            autoCapitalize='none' 
                            autoCorrect={false}
                            value={enteredNumber}
                            onChangeText={numberChangeHandler}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.button}>
                                <PrimaryButton onPress={resetEnteredNumber}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.button}>
                                <PrimaryButton onPress={confirmPress}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    screenContainer: {
        flex: 1,
        // marginTop: deviceHeight < 400 ? 50 : 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.secondary1,
        borderBottomWidth: 2,
        color: Colors.secondary1,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    button: {
        flex: 1
    }
})