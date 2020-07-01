import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text, Button as ReactButton, TouchableOpacity } from 'react-native';
import { text, color, select, optionsKnob as options, array } from '@storybook/addon-knobs';
import { withKnobs } from '@storybook/addon-ondevice-knobs';

import { Button } from "../../components"

import { LoginScreen } from "../../screens"

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf('CenteredView', module).add('default view', () => (
  <CenteredView>
    <Text>Hello Storybook</Text>
  </CenteredView>
));

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Device Button', () => {
        return <ReactButton title={text("Título botão", "Title")} />
    })
    .add('Custom Button', () => {
      const corBotao = color("Cor do Botão", "pink");
      const tituloBotao = text("Título do Botão", "Xablauzinho");
      return <Button title={tituloBotao} color={corBotao} />
    });


storiesOf('Screens', module)
    .addDecorator(withKnobs)
    .add('Tela Login', () => {
        return <LoginScreen />
    })