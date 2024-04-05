import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();
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
                <Text style={styles.title}>Acesso ao Chat</Text>
                <Text style={styles.text}>Use seu e-mail e senha cadastrados para acessar o painel de conversas</Text>

                <TextInput
                    placeholder='Login'
                    style={styles.input}
                />

                <TextInput
                    placeholder='Senha'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.buttonLogin} onPress={ () => navigation.navigate('Chat')}>
                    <Text style={styles.buttonTextLogin}>Acessar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonCadastro} onPress={ () => navigation.navigate('Cadastro')}>
                    <Text style={styles.buttonTextCadastro}>Cadastrar</Text>
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
    title:{
        color:'#FEFEFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom:12,
    },
    text:{
        color:'#FEFEFE',
        fontSize:17,
        textAlign:'center',
        marginBottom:12
    },
    buttonLogin:{
        backgroundColor:'#FEFEFE',
        borderRadius:14,
        paddingVertical:8,
        width:'90%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,
    },
    buttonCadastro:{
        backgroundColor:"#219653",
        borderRadius:14,
        paddingVertical:8,
        width:'90%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
    },
    buttonTextLogin:{
        fontSize:18,
        color:'#219653',
        fontWeight:"bold"
    },
    buttonTextCadastro:{
        fontSize:18,
        color:'#F2F2F2',
        fontWeight:"bold"
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
    }
})