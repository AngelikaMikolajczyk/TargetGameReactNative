import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../constans/colors';

export function InstructionText({children, style}) {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.secondary1,
        fontSize: 24,
        fontFamily: 'open-sans'
    }
})