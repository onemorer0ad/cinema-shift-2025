import React from 'react';
import styles from './Navigation.module.scss';
import PosterSvg from '../../common/PosterSvg/PosterSvg';
import ProfileSvg from '../../common/ProfileSvg/ProfileSvg';
import TicketsSvg from '../../common/TicketsSvg/TicketsSvg';
import ShiftCinemaSvg from '../../common/LogoSvg/ShiftCinemaSvg';
import LogoRightSvg from '../../common/LogoSvg/LogoRightSvg';

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
