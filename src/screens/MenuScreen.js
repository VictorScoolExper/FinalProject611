import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import firebase from '../utils/firebase';
import 'firebase/auth/';
import MessageListScreen from './MessageListScreen';

const MenuScreen = (props) => {
    var typeUser = 'admin';

    //const collectionReference = 

    const logout = ()=>{
        firebase.auth().signOut();
    }

    return(
        <View style={styles.container}>
            <Text>{props.userId}</Text>
            <TouchableOpacity 
                onPress={()=>{
                
                }} 
                style={styles.button}
            >
                <Text style={styles.text}>Messages</Text>
            </TouchableOpacity>
    
            <TouchableOpacity 
                onPress={()=>{
                    
                }} 
                style={styles.button}
            >
                <Text style={styles.text}>Help</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={()=>{
                    logout();
                }} 
                style={styles.buttonSalir}
            >
                <Text style={styles.textSalir}>Exit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'orange',
        marginTop : 50,
        marginBottom : 20
      },
      text : {
          fontSize : 25,
      },
      textSalir : {
        fontSize : 15,
      },
      buttonSalir : {
          height : 40,
          width : 150,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 30,
          backgroundColor: 'red',
          marginTop : 90,
      }
})

export default MenuScreen;