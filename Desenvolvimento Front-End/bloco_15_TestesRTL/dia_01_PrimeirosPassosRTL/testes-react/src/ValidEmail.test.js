import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';
import App from './App';

test('Testando um componente, caso o email seja valido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se tem um campo.', () => {
  const MENSAGEM  =  "Digite uma mensagem";
  const { getByText } = render (<App />)
  const isValid = getByText('Digite uma mensagem');
  expect(isValid).toBeInTheDocument('Digite uma mensagem');
})