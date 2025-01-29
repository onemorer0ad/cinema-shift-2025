import React, { useState } from 'react';
import styles from './Schedule.module.scss';
import Button from '@common/Button/Button';
import { Link } from 'react-router-dom';

interface seancesProps {
  time: string;
  hall: {
    name: string;
    places: any[][];
  };
}

interface scheduleQueryProps {
  date: string;
  seances: seancesProps[];
}

interface scheduleQueryDataProps {
  scheduleQueryData: scheduleQueryProps[];
}

const Schedule = ({ scheduleQueryData }: scheduleQueryDataProps) => {
  const [activeDay, setActiveDay] = useState(0);
  const [activeTime, setActiveTime] = useState(null);

  console.log(activeTime);

  const selectedDaySchedule = scheduleQueryData.find(
    (_, id) => id === activeDay
  );

  // Группируем сеансы по залам
  const groupedSeances = selectedDaySchedule?.seances.reduce((acc, seance) => {
    const hallName = seance.hall.name;
    if (!acc[hallName]) {
      acc[hallName] = [];
    }
    acc[hallName].push(seance);
    return acc;
  }, {});

  console.log(groupedSeances);

  return (
    <div className={styles.days_container}>
      <div className={styles.schedule_dates}>
        {scheduleQueryData.map((elem, index) => {
          return (
            <div
              onClick={() => setActiveDay(index)}
              className={
                index == activeDay
                  ? `${styles.day_date} ${styles.day_active}`
                  : styles.day_date
              }
              key={index}
            >
              {elem.date}
            </div>
          );
        })}
      </div>
      <div className={styles.schedule_time}>
        {Object.entries(groupedSeances).map(([hallName, seances]) => (
          <div key={hallName} className={styles.hall_block}>
            <h3>{hallName}</h3>
            <div className={styles.seances_list}>
              {seances.map((seance, id) => {
                return (
                  <div
                    key={id}
                    onClick={() => setActiveTime(seance.time)}
                    className={
                      seance.time == activeTime
                        ? `${styles.seance_time} ${styles.time_active}`
                        : styles.seance_time
                    }
                  >
                    {seance.time}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <Button>Продолжить</Button>
    </div>
  );
};

export default Schedule;
