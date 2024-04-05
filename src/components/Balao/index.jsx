import { View, StyleSheet, Text } from "react-native";


export default function Balao({tipo, conteudo, usuario}){

    function ajustaBalao(){
        if (tipo=='aluno'){
            return ` flex: 1,
            width: '100vw',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center'`
        }else{
            return ` flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center'`
        }
    }
    return(
        <>
            <View style={ajustaBalao()}>
                <View style={styles.container}>
                    <Text>{`${usuario}: ${conteudo.text}`}</Text>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '80%',
        height: 'auto',
        padding: '5px',
        margin: '3px',
        backgroundColor:"green",
        borderColor: 'black',
        borderRadius: '25px'
    },
 
})