import React, { useContext, useState } from 'react';
import styles from './Schedule.module.scss';
import Button from '@common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSeance } from '@utils/contexts/store/SeanceContext/SeanceContext';

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
  filmId: string;
}

const Schedule = ({ scheduleQueryData, filmId }: scheduleQueryDataProps) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [activeDay, setActiveDay] = useState('');
  const [activeTime, setActiveTime] = useState<{
    time: string;
    hall: string;
  } | null>(null);
  const navigate = useNavigate();
  const { seanceInfo, setSeanceInfo } = useSeance();
  console.log(seanceInfo);

  const selectedDaySchedule = scheduleQueryData.find(
    (_, id) => id === activeDayIndex
  );

  const selectedHallAndTime = selectedDaySchedule!.seances.find(
    (elem) =>
      elem.time === activeTime?.time && elem.hall.name === activeTime?.hall
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

  const filmDateAndTimeHandler = () => {
    setSeanceInfo({
      filmId: filmId,
      seance: {
        date: activeDay,
        time: selectedHallAndTime!.time,
      },
      selectedHallAndTime,
    });
    navigate(`/processing/cinemaplace/${filmId}`);
  };

  return (
    <div className={styles.days_container}>
      <div className={styles.schedule_dates}>
        {scheduleQueryData.map((elem, index) => {
          return (
            <div
              onClick={() => {
                setActiveDayIndex(index);
                setActiveDay(elem.date);
              }}
              className={
                index == activeDayIndex
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
              {seances.map((seance, id) => (
                <div
                  key={id}
                  onClick={() => {
                    setActiveTime({ time: seance.time, hall: hallName });
                  }}
                  className={
                    activeTime?.time === seance.time &&
                    activeTime?.hall === hallName
                      ? `${styles.seance_time} ${styles.time_active}`
                      : styles.seance_time
                  }
                >
                  {seance.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button onClick={filmDateAndTimeHandler}>Продолжить</Button>
    </div>
  );
};

export default Schedule;
