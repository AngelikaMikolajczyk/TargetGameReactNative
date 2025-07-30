import { View, Text, Pressable, StyleSheet } from 'react-native';

export function PrimaryButton({children}) {
    function onPressHandler() {
        
    }
    
    return (
        
            <View style={styles.buttonOuterContainer}>
                <Pressable 
                    onPress={onPressHandler} 
                    android_ripple={{color: '#440528FF'}} 
                    style={({pressed}) => pressed ? [styles.pressedButton, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                >
                    <Text style={styles.buttonText}>{children}</Text>
                </Pressable>
            </View>
        
    )
}
 const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#8B1355FF',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        shadowColor: '#440528FF',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5,
    },
    buttonText: {
        color: '#F0C3F0FF',
        textAlign: 'center'
    },
    pressedButton: {
        opacity: 0.75
    },
 
 })