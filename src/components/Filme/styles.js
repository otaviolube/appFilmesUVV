import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    viewImg: {
        width: '30%',
        height: 150,
        backgroundColor: 'yellow'
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    viewData: {
        backgroundColor: 'green',
        padding: 10,
        width: '70%',
        height: '100%',
    },
    titulo: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    }, 
    sinopse: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    }, 
    preco: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
        
    },
    btn: {
        padding: 10,
        backgroundColor: 'yellow'
    }
});

export default styles;
