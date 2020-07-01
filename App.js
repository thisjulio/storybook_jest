import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Button, View } from 'react-native';

const operacaoComSucesso = (count) => {
  if (count == 5) {
    alert("operação realizada com sucesso");
  }
}

const CountText = ({count}) => <>
  {count ? <Text>Você clicou!</Text> : null}
  {count >= 3 ? <Text>Você clicou {count} vezes!</Text> : null}
</>;

const App = () => {
  const [count, setCount] = useState(0);

  return (<View>
    <Text>Hello World!</Text>
    <Button title="Clicar" onPress={() => {
      setCount(countAnterior => {
        const novoCount = countAnterior+1;
        operacaoComSucesso(novoCount);
        return novoCount;
      });
    }} />
    <CountText count={count} />
  </View>);
};

export default App;