import React from 'react';
import styles from './Navigation.module.scss';
import logo_left from '../../assets/img/logo_left.png';
import logo_right from '../../assets/img/logo_right.png';
import PosterSvg from './PosterSvg/PosterSvg';
import ProfileSvg from './ProfileSvg/ProfileSvg';
import TicketsSvg from './TicketsSvg/TicketsSvg';
import ShiftCinemaSvg from './LogoSvg/ShiftCinemaSvg';
import LogoRightSvg from './LogoSvg/LogoRightSvg';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation_item}>
        <ShiftCinemaSvg />
        <LogoRightSvg />
      </div>
      <div className={styles.navigation_item}>
        <PosterSvg />
        Афиша
      </div>
      <div className={styles.navigation_item}>
        <ProfileSvg />
        Профиль
      </div>
      <div className={styles.navigation_item}>
        <TicketsSvg />
        Билеты
      </div>
    </nav>
  );
};

export default Navigation;
