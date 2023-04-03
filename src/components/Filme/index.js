import { Button, Image, Text, View } from "react-native";

import styles from './styles';

export default function Filme(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{
                    uri: props.filme.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.titulo}>Título: {props.filme.titulo}</Text>
                <Text style={styles.sinopse}>Sinopse: {props.filme.sinopse}</Text>
                <Text style={styles.preco}>Preço: {props.filme.preco}</Text>
                <Button style={styles.btn} title="Comprar"/>
            </View>
        </View>
    );
}