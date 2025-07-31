import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../../constans/colors';

export function PrimaryButton({children, onPress}) {    
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={onPress} 
                android_ripple={{color: Colors.primary2}} 
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
        backgroundColor: Colors.primary1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        shadowColor: Colors.primary2,
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5,
    },
    buttonText: {
        color: Colors.buttonText,
        textAlign: 'center'
    },
    pressedButton: {
        opacity: 0.75
    },
 
 })