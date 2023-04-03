import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Filme from './src/components/Filme';

export default function App() {

  const filmes = [
    {
      titulo: 'Avatar',
      sinopse: 'Sinopse de Avatar',
      preco: 'R$ 20,00',
      imgUrl: "https://upload.wikimedia.org/wikipedia/pt/b/b0/Avatar-Teaser-Poster.jpg"
    },
    {
      titulo: 'John Wick 4',
      sinopse: 'Sinopse de John Wick 4',
      preco: 'R$ 30,00',
      imgUrl: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRqrKJZDdztbandY01Awn8oJQmk1EPRugfnpn3FfgKZ7iwO5t0lyAPYN2zjz2TOkzKr"
    },
  ]

  return (
    <View style={styles.container}>
      {filmes.map(f => <Filme filme={f}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
