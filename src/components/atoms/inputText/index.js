import React from 'react'
import { StyleSheet, Text, View, inputText as Input} from 'react-native'

const inputText = ({label, placeholder, ...rest}) => {
    return (
        <View>
            <Text style={styles.labelInput}>{label}</Text>
            <Input style={styles.input}
            placeholder={placeholder}
            {...rest} 
            />
        </View>
    );
};

export default inputText

const styles = StyleSheet.create({
    labelInput: {
        fontSize: 18,
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        paddingLeft: 16,
        paddingVertical: 12,
        marginTop: 5,
    },
});