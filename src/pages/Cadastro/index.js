import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from "firebase/firestore";
import db from '../../services/firebaseConf'
export default function Cadastro() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigation = useNavigation();

    const regexEmail = new RegExp(/^.*@.*IFPR.*\.com$/i );
    
    async function validacao(){
        if (!regexEmail.test(email)) {
            alert("EMAIL INVÁLIDO")
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "usuarios"), {
                email,
                senha
                });
                console.log("Document written with ID: ", docRef.id);
                navigation.navigate ('Chat')
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        
    }
        
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/IFPR-logo.png')}
                    style={{width:190}}
                    resizeMode='contain'
                />
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Cadastro</Text>

                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                />

                <TextInput
                    placeholder='Senha'
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                />

                <TextInput
                    placeholder='Confirme a senha'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={validacao}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#052F0E",
    },
    containerLogo:{
        flex:1,
        backgroundColor:"#052F0E",
        justifyContent:'center',
        alignItems:'center'
    },
    containerForm:{
        flex:2,
        paddingStart:'5%',
        paddingEnd:'5%',
        alignItems:'center',
        
    },
    input:{
        backgroundColor:'#C9FDD5',
        color:'#219653',
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:16,
        paddingVertical:8,
        marginTop:10,
        paddingLeft:15,
        fontSize:18,
    },
    buttonText:{
        fontSize:18,
        color:'#219653',
        fontWeight:"bold"
    },
    button:{
        backgroundColor:'#FEFEFE',
        borderRadius:14,
        paddingVertical:8,
        width:'90%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:80,
    },
    title:{
        color:'#FEFEFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom:12,
    }
})