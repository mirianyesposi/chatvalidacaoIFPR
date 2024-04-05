import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Chat from '../pages/Chat'

const Stack = createNativeStackNavigator ();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="Chat"
                component={Chat}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}