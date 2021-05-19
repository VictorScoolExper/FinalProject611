import React from 'react';
import { View, StyleSheet, FlatList, TextInput, TouchableOpacity, Text } from 'react-native';

const MessageScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.messages}>
                <FlatList>

                </FlatList>
            </View>
            <View style={styles.containerBottom}>
                <TextInput
                    placeholder = "Messages Here!"
                    placeholderTextColor = '#000'
                    style = {styles.inputText}
                />
                <TouchableOpacity>
                    <Text style={styles.textButton}>Send</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        
    },
    messages : {
        height: '80%',
        width : '100%',
    },
    containerBottom : {
        backgroundColor : 'grey',
        flexDirection : 'row',
        height : '10%',
        width : '100%',
        position: 'absolute',
        bottom : 0

    },
    inputText : {
        width : "70%"
    },
    buttonSend : {
        width : "30%",
        
    },
    textButton : {
        margin : 20,
        color : 'white',
        fontSize : 20,
    }
});

export default MessageScreen;