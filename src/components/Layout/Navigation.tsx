import React from 'react';
import styles from './Navigation.module.scss';
import logo_left from '../../assets/img/logo_left.png';
import logo_right from '../../assets/img/logo_right.png';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation_item}>
        <img src={logo_left} alt="logo1" />
        <img src={logo_right} alt="logo2" />
      </div>
      <div className={styles.navigation_item}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4L6 8H9L7 4H9L11 8H14L12 4H14L16 8H19L17 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4ZM4 10V18H20V10H4Z"
            fill="#712D9C"
          />
        </svg>
        Афиша
      </div>
      <div className={styles.navigation_item}>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 8.57101C16 10.7802 14.2091 12.571 12 12.571C9.79086 12.571 8 10.7802 8 8.57101C8 6.36188 9.79086 4.57101 12 4.57101C14.2091 4.57101 16 6.36188 16 8.57101ZM14.5 8.57101C14.5 9.95173 13.3807 11.071 12 11.071C10.6193 11.071 9.5 9.95173 9.5 8.57101C9.5 7.1903 10.6193 6.07101 12 6.07101C13.3807 6.07101 14.5 7.1903 14.5 8.57101Z"
            fill="#141C24"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 18.343V20.571H20V18.343C20 16.6756 18.9657 15.1832 17.4045 14.5977L17.2669 14.5461C13.8711 13.2727 10.1289 13.2727 6.73315 14.5461L6.59551 14.5977C5.03429 15.1832 4 16.6756 4 18.343ZM7.25984 15.9506C10.316 14.8045 13.684 14.8045 16.7402 15.9506L16.8778 16.0022C17.8536 16.3681 18.5 17.3009 18.5 18.343V19.071H5.5V18.343C5.5 17.3009 6.14643 16.3681 7.12219 16.0022L7.25984 15.9506Z"
            fill="#141C24"
          />
        </svg>
        Профиль
      </div>
      <div className={styles.navigation_item}>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 17.571C12.5523 17.571 13 17.1233 13 16.571C13 16.0187 12.5523 15.571 12 15.571C11.4477 15.571 11 16.0187 11 16.571C11 17.1233 11.4477 17.571 12 17.571Z"
            fill="#141C24"
          />
          <path
            d="M13 12.571C13 13.1233 12.5523 13.571 12 13.571C11.4477 13.571 11 13.1233 11 12.571C11 12.0187 11.4477 11.571 12 11.571C12.5523 11.571 13 12.0187 13 12.571Z"
            fill="#141C24"
          />
          <path
            d="M12 9.57101C12.5523 9.57101 13 9.12329 13 8.57101C13 8.01874 12.5523 7.57101 12 7.57101C11.4477 7.57101 11 8.01874 11 8.57101C11 9.12329 11.4477 9.57101 12 9.57101Z"
            fill="#141C24"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 14.571V18.571C2 19.6756 2.89543 20.571 4 20.571H20C21.1046 20.571 22 19.6756 22 18.571V14.571C20.8954 14.571 20 13.6756 20 12.571C20 11.4664 20.8954 10.571 22 10.571V6.57101C22 5.46643 21.1046 4.57101 20 4.57101H4C2.89543 4.57101 2 5.46646 2 6.57101V10.571C3.10457 10.571 4 11.4664 4 12.571C4 13.6756 3.10457 14.571 2 14.571ZM20.5 18.571C20.5 18.8472 20.2761 19.071 20 19.071H4C3.72385 19.071 3.5 18.8472 3.5 18.571V15.7342C4.68246 15.1725 5.5 13.9672 5.5 12.571C5.5 11.1748 4.68248 9.96957 3.5 9.40784V6.57101C3.5 6.29486 3.72385 6.07101 4 6.07101H20C20.2761 6.07101 20.5 6.29486 20.5 6.57101V9.40784C19.3175 9.96957 18.5 11.1748 18.5 12.571C18.5 13.9672 19.3175 15.1725 20.5 15.7342V18.571Z"
            fill="#141C24"
          />
        </svg>
        Билеты
      </div>
    </nav>
  );
};

export default Navigation;
