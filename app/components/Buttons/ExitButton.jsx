import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../../contexts/auth";

const ExitButton = ({navigation}) => {
    const { signOut } = useAuth()
    return(

        <LinearGradient colors={["#E8554C", "#C74569"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.button}>
        <TouchableOpacity onPress={() => {signOut(); navigation.push("Login")}}>
            <Text style={{color:"#fff", alignSelf:'center', fontWeight:'500', fontSize:'18px'}}>Sair</Text>
        </TouchableOpacity>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:'linear-gradient(90deg, rgba(232,85,76,1) 0%, rgba(199,69,105,1) 100%)',
        height:'40px',
        width:'70px',
        borderRadius:'100px',
        justifyContent:'center'
    }
})

export default ExitButton;