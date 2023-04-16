import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primaryDark};
`;

export const Ul = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;

  a {
    text-decoration: none;
    color: ${(props) =>
      props.theme.title === 'light' ? '#fff' : props.theme.colors.text};
    padding: 0.5rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.primarylight};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const ButtonToggleTheme = styled.button`
  background-color: ${(props) => props.theme.colors.primarylight};
  color: ${(props) =>
    props.theme.title === 'light' ? '#fff' : props.theme.colors.text};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 8px;

  height: 3rem;
  width: 3rem;
  border: none;
  border-radius: 50%;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
