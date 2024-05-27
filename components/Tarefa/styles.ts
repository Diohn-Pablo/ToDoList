import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
    },
    containerTarefa: {
        backgroundColor: '#333333',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        gap: 20,
        borderRadius: 10,
        marginTop: 10,
    },

    tarefaText: {
        flex:1,
        flexWrap: 'wrap',
        textAlign: 'center',
        color: '#fff'
    }
});