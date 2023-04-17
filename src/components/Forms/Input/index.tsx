import React from 'react';
import * as S from './styles';

export interface InputInterface {
  type: React.HTMLInputTypeAttribute;
  name: string;
  label: string;
  value: string;
  isValid: boolean;
  errorMessage: string;
  placeholder: string;
  handleChange: (event: string) => void;
}
export const Input: React.FC<InputInterface> = ({
  name,
  label,
  type,
  value,
  placeholder,
  errorMessage,
  isValid,
  handleChange,
}: InputInterface) => {
  return (
    <S.Container data-testid="input">
      <S.Label data-testid="input-label" isValid={isValid}>
        {label}
      </S.Label>
      <S.Input
        data-testid={`input-${type}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        isValid={isValid}
      />
      {!isValid && (
        <S.Error data-testid="input-errorMessage">{errorMessage}</S.Error>
      )}
    </S.Container>
  );
};
