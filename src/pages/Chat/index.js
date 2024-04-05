import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Switch } from 'react-native';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const sendMessage = () => {
        if (inputText.trim() === '') {
            return;
        }
        const newMessage = {
            username: 'username',
            time: new Date().toLocaleTimeString(),
            text: inputText.trim(),
        };
        setMessages([...messages, newMessage]);
        setInputText('');
    };


    const renderItem = ({ item , index}) => {
        const alignStyle = isEnabled ? styles.leftAlign : styles.rightAlign;

        return (
            <View style={[styles.containerMensagem, alignStyle]}>
                <Text>{`${item.username} (${item.time}): ${item.text}`}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <FlatList
                    style={styles.lista}
                    data={messages}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua mensagem..."
                    value={inputText}
                    onChangeText={setInputText}
                />
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <TouchableOpacity style={styles.button} onPress={sendMessage}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#052F0E",
    },
    lista: {
        width: '100%'
    },
    containerMensagem: {
        backgroundColor: "#ECEAEA",
        color: "#1E1E1E",
        width: '80%',
        borderRadius: 16,
        padding: 15,
        marginTop: 10,
        fontSize: 18,

    },
    leftAlign: {
        alignSelf: 'flex-start',
     },
     rightAlign: {
        alignSelf: 'flex-end',
     },

    containerForm: {
        flex: 2,
        alignItems: 'center',

    },
    input: {
        backgroundColor: '#C9FDD5',
        color: '#219653',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        paddingVertical: 8,
        marginTop: 10,
        paddingLeft: 15,
        fontSize: 18,
    },
    buttonText: {
        fontSize: 18,
        color: '#219653',
        fontWeight: "bold"
    },
    button: {
        backgroundColor: '#FEFEFE',
        borderRadius: 14,
        paddingVertical: 8,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
})