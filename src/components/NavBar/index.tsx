import { Link } from 'react-router-dom';

import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeHookReturnType } from '../../hooks/useTheme';

import * as S from './styles';

export type NavBarInterface = {
  label: string;
  link: string;
};

export interface NavBarSettings {
  settings: NavBarInterface[];
  themeSettings: ThemeHookReturnType;
}

export const NavBar = ({ settings, themeSettings }: NavBarSettings) => {
  return (
    <S.Nav>
      <S.Ul>
        {settings.map(({ label, link }, key) => (
          <Link to={link} key={key}>
            {label}
          </Link>
        ))}
      </S.Ul>
      <S.ButtonToggleTheme onClick={themeSettings.toggleTheme}>
        {themeSettings.theme.title === 'light' ? <FaMoon /> : <FaSun />}
      </S.ButtonToggleTheme>
    </S.Nav>
  );
};
