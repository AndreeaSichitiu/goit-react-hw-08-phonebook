import { useAuth } from 'hooks';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import css from './AppBar.module.css';
import { styled } from '@mui/material/styles';

const AppBars = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
`;

export const Bar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBars className={css.maintoolbar} position="static">
      <Toolbar className={css.toolbar} component="nav">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBars>
  );
};
