import React, { useState } from 'react';
import styles from './Tooltip.module.scss'; // Добавьте этот импорт

const Tooltip = (props: any) => {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className={styles.tooltipWrapper}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {active && (
        <div className={styles.tooltipContent}>
          <div className={styles.price}>{props.content.price} Р</div>
          <span className={styles.seatInfo}>
            {props.content.id} ряд,
            {props.content.seatId} место
          </span>
        </div>
      )}
      {props.children}
    </div>
  );
};

export default Tooltip;
