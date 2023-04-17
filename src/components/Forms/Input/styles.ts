import styled, { css } from 'styled-components';

interface ErrorMessage {
  isValid: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`;

export const Label = styled.label<ErrorMessage>`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(${(props) => (props.isValid ? '--grey' : '--red')});
`;

const inputTextDefault = css`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: var(--black);
`;

export const Input = styled.input<ErrorMessage>`
  height: 72px;
  width: 100%;
  min-width: 160px;
  box-sizing: border-box;
  border: 1px solid var(${(props) => (props.isValid ? '--line' : '--red')});
  border-radius: 8px;
  padding: 12px 24px;
  ${inputTextDefault}

  &::placeholder {
    ${inputTextDefault}
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border: 1px solid var(${(props) => (props.isValid ? '--purple' : '--red')});
    caret-color: var(${(props) => (props.isValid ? '--purple' : '--red')});
  }
`;

export const Error = styled.label`
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: var(--red);
`;
