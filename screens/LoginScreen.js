import React from "react"
import { SafeAreaView, Text, TextInput } from "react-native"
import { Button } from "../components"

export default () => (<SafeAreaView style={{flex:1}}>
    <Text>Hello World!</Text>
    <TextInput placeholder="Insira o seu e-mail..." keyboardType="email-address" />
    <TextInput placeholder="Senha" secureTextEntry={true} />
    <Button title="Enviar" color="green" />
</SafeAreaView>);