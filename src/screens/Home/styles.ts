import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        position: 'relative',
    },

    containerHeader: {
        backgroundColor: '#000',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 20,
        gap: 10,
        position: 'absolute',
        top: 190,
    },

    input: {
        backgroundColor: '#333333',
        color: '#fff',
        fontSize: 16,
        height: 56,
        borderWidth: 1,
        borderColor: '#5e60ce',
        borderRadius: 5,
        padding: 15,
        flex: 1,
    },

    button: {
        width: 56,
        height: 56,
        backgroundColor: '#4ea8de',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 24,
        color: '#fff'
    },

    containerTarefa: {
        paddingHorizontal: 20,
        marginTop: 50,
    },

    contadorTarefas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },

    criadas: {
        color: '#4ea8de',
        fontSize: 16,
        fontWeight: 'bold'
    },

    concluidas: {
        color: '#5e60ce',
        fontSize: 16,
        fontWeight: 'bold'
    },

    containerClipBoard: {
        width: '100%',
        alignItems: 'center',
        marginTop: 80,
        gap: 20,
    },

    clipBoardText: {
        fontSize: 16,
        color: 'grey'
    },

    contador: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
         gap: 5,
    },

    contadorBorder: {
        backgroundColor: '#333333',
        padding: 8,
        borderRadius: 50,
    },

    textContador: {
        color: '#fff',
        fontSize: 16,
    }

    
});