import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font'
import { useState } from 'react';
import { GameScreen } from './screens/GameScreen';
import { Colors } from './constans/colors';
import { GameOverScreen } from './screens/GameOverScreen';
// import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundNumber, setRoundsNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  // if(!fontsLoaded) {
  //   return <AppLoading/>
  // }

  useEffect(() => {
    async function hideSplash() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
 
    hideSplash();
  }, [fontsLoaded]); 
 
  if (!fontsLoaded) {
    return null; 
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setRoundsNumber(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setRoundsNumber(0);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(userNumber && gameIsOver) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={roundNumber} onStartNewGame={startNewGameHandler}/>
  }

  return (
    <LinearGradient style={styles.container} colors={[Colors.primary3, Colors.secondary1]}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.container} imageStyle={styles.backgroundImage}>
       <SafeAreaView style={styles.container}>
        {screen}
       </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2
  }
});
