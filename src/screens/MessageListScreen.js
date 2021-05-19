import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Touchable } from 'react-native';
import CardListMessage from '../componentes/CardListMessage';

const MessageListScreen = () => {
    return(
        <View style={styles.container}>
            
        <TouchableOpacity onPress={()=>{ }}>
            <CardListMessage from="Jorge" about="Hello, How are you?"/>
        </TouchableOpacity>
                
            
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        
    }
});

export default MessageListScreen;