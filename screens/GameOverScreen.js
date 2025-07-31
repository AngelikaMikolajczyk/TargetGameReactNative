import { View, StyleSheet, Image, Text } from "react-native"
import { Title } from "../components/ui/Title"
import { Colors } from '../constans/colors';
import { PrimaryButton } from "../components/ui/PrimaryButton";

export function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.screenContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={require('../assets/images/success.png')}/>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
            round to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageWrapper: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary4,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary1
    }
})