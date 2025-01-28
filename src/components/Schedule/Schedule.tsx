import React, { useState } from 'react';
import s from './Schedule.module.scss';
import Button from '@common/Button/Button';
import { Link } from 'react-router-dom';

const Schedule = ({ scheduleQueryData }) => {
  const [activeDay, setActiveDay] = useState(0);
  const [activeTime, setActiveTime] = useState(null);

  console.log(activeTime);

  const selectedDaySchedule = scheduleQueryData.find(
    (_, id) => id === activeDay
  );

  // Группируем сеансы по залам
  const groupedSeances = selectedDaySchedule.seances.reduce((acc, seance) => {
    const hallName = seance.hall.name;
    if (!acc[hallName]) {
      acc[hallName] = [];
    }
    acc[hallName].push(seance);
    return acc;
  }, {});

  console.log(groupedSeances);

  return (
    <div className={s.days_container}>
      <div className={s.schedule_dates}>
        {scheduleQueryData.map((elem, index) => {
          return (
            <div
              onClick={() => setActiveDay(index)}
              className={
                index == activeDay
                  ? `${s.day_date} ${s.day_active}`
                  : s.day_date
              }
              key={index}
            >
              {elem.date}
            </div>
          );
        })}
      </div>
      <div className={s.schedule_time}>
        {Object.entries(groupedSeances).map(([hallName, seances]) => (
          <div key={hallName} className={s.hall_block}>
            <h3>{hallName}</h3>
            <div className={s.seances_list}>
              {seances.map((seance, id) => {
                return (
                  <div
                    key={id}
                    onClick={() => setActiveTime(seance.time)}
                    className={
                      seance.time == activeTime
                        ? `${s.seance_time} ${s.time_active}`
                        : s.seance_time
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
