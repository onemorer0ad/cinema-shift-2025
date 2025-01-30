import React from 'react';
import styles from './Navigation.module.scss';
import ProfileSvg from '@common/ProfileSvg/ProfileSvg';
import TicketsSvg from '@common/TicketsSvg/TicketsSvg';
import ShiftCinemaSvg from '@common/LogoSvg/ShiftCinemaSvg';
import LogoRightSvg from '@common/LogoSvg/LogoRightSvg';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '@utils/constants';
import Button from '@common/Button/Button';

const Navigation = () => {
  const navigate = useNavigate();

  const handleAuthClick = () => {
    navigate(ROUTES.AUTH);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.leftSection}>
        <NavLink to={ROUTES.FILMS} className={styles.navigation_item}>
          <ShiftCinemaSvg />
          <LogoRightSvg />
        </NavLink>
        {/* <NavLink to={ROUTES.FILMS} className={styles.navigation_item}>
          <PosterSvg />
          Афиша
        </NavLink> */}
        <div className={styles.navigation_item}>
          <ProfileSvg />
          Профиль
        </div>
        <div className={styles.navigation_item}>
          <TicketsSvg />
          Билеты
        </div>
      </div>
      <div className={styles.rightSection}>
        <Button onClick={handleAuthClick}>Войти</Button>
      </div>
    </nav>
  );
};

export default Navigation;
