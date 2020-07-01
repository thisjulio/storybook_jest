import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react-native';
import App from '../App';

const randomInt = (to, from=0) => Math.floor(Math.random() * to) + from

test("Aplicativo deve exibir tela com mensagem `Hello World!`", () => {
  const {getByText} =  render(<App />);

  const mensagem = getByText("Hello World!");

  expect(mensagem).toBeTruthy();
});

test("Aplicativo deve exibir tela com botão escrito `Clicar`", () => {
  const {getByText} =  render(<App />);

  const btn = getByText("Clicar");

  expect(btn).toBeTruthy();
});

test("Ao não clicar no botão com texto `Clicar`, não deve ser exibido um texto escrito `Você clicou!` na tela", () => {
  const {queryByText} =  render(<App />);

  expect(queryByText("Você clicou!")).not.toBeTruthy();
});

test("Ao clicar no botão com texto `Clicar`, deve ser exibido um texto escrito `Você clicou!` na tela", () => {
  const {getByText} =  render(<App />);

  const btn = getByText("Clicar");
  fireEvent.press(btn);

  const texto = getByText("Você clicou!");

  expect(texto).toBeTruthy();
});

test("Ao clicar não clicar no botão com texto `Clicar`, não deve ser exibido um texto escrito `Você clicou 3 vezes!` na tela", () => {
  const {queryByText} =  render(<App />);

  const texto = queryByText("Você clicou 3 vezes!");

  expect(texto).not.toBeTruthy();
});

test("Ao clicar no botão com texto `Clicar` menos de 3 vezes, não deve ser exibido um texto escrito `Você clicou 3 vezes!` na tela", () => {
  const {getByText, queryByText} =  render(<App />);

  const btn = getByText("Clicar");
  fireEvent.press(btn);
  fireEvent.press(btn);

  const texto = queryByText("Você clicou 3 vezes!");

  expect(texto).not.toBeTruthy();
});

test("[DEPRECATED] Ao clicar no botão com texto `Clicar` 3 vezes, deve ser exibido um texto escrito `Você clicou 3 vezes!` na tela", () => {
  const {getByText} =  render(<App />);

  const btn = getByText("Clicar");
  fireEvent.press(btn);
  fireEvent.press(btn);
  fireEvent.press(btn);

  const texto = getByText("Você clicou 3 vezes!");

  expect(texto).toBeTruthy();
});

test("Ao clicar no botão com texto `Clicar` 3 vezes ou mais, deve ser exibido um texto escrito `Você clicou {n} vezes!` (n -> número de cliques) na tela", () => {
  global.alert = () => {};

  const {getByText} =  render(<App />);

  const numeroDeClicks = randomInt(1024, 3);

  const btn = getByText("Clicar");

  for (let index = 0; index < numeroDeClicks; index++) {
    fireEvent.press(btn);
  }

  const texto = getByText(`Você clicou ${numeroDeClicks} vezes!`);

  expect(texto).toBeTruthy();

  delete global.alert;
});

test("Ao clicar não clicar no botão com texto `Clicar`, não deve exibir um alerta com a mensagem `operação realizada com sucesso`", () => {
  global.alert = jest.fn((menssage) => {});
  
  render(<App />);
  
  expect(global.alert).not.toBeCalled();

  delete global.alert;
});

test("Ao clicar no botão com texto `Clicar` menos de 5 vezes, não deve exibir um alerta com a mensagem `operação realizada com sucesso`", () => {
  global.alert = jest.fn((menssage) => {});

  const {getByText} =  render(<App />);

  const btn = getByText("Clicar");
  fireEvent.press(btn);
  fireEvent.press(btn);
  fireEvent.press(btn);
  fireEvent.press(btn);


  expect(global.alert).not.toBeCalled();

  delete global.alert;
});

test("Ao clicar no botão com texto `Clicar` 5 vezes, deve exibir um alerta com a mensagem `operação realizada com sucesso`", () => {
  global.alert = jest.fn((menssage) => {});

  const {getByText} =  render(<App />);

  const btn = getByText("Clicar");
  fireEvent.press(btn);
  fireEvent.press(btn);
  fireEvent.press(btn);
  fireEvent.press(btn);
  fireEvent.press(btn);


  expect(global.alert).toHaveBeenCalledWith("operação realizada com sucesso");
});