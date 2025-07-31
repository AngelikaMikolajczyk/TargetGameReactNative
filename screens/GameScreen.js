import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Alert, FlatList } from 'react-native';
import { Title } from '../components/ui/Title';
import { useEffect, useState, useMemo } from 'react';
import { NumberContainer } from '../components/game/Number';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/Instruction';
import { Colors } from '../constans/colors';
import { GuessLogItem } from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    if(randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([]);

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    function onHintPress(direction) {
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", "You know that is wrong...", [{text: 'Sorry!', style: 'cancel'}])
            return;
        } 
        if(direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);
        setGuessRounds((currentGuessRounds) => [newRandomNumber, ...currentGuessRounds])
    }

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.container}>
            <Title>Opponent' Guess </Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={() => onHintPress('lower')}>
                            <Ionicons name="remove" size={20} color={Colors.buttonText} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={() => onHintPress('higher')}>
                            <Ionicons name="add" size={20} color={Colors.buttonText} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.guesRoundsContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    button: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    },
    guesRoundsContainer: {
        flex: 1,
        padding: 16
    }
})