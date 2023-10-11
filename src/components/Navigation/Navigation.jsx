import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import style from './Navigation.module.css';
import { Button } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={style.nav}>
      <NavLink className={style.link} to="/">
        <Button
          type="button"
          variant="contained"
          aria-label="Start"
          size="large"
          color="primary"
        >
          Home
        </Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={style.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
