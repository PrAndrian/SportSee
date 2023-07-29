/* eslint-disable linebreak-style */
import React from 'react';
import {
  Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import PropTypes from 'prop-types';
import styles from '../../styles/AverageSessionTime.module.css';

const dataKeyValue = (day) => {
  switch (day) {
    case 1:
      return 'L';
    case 2:
      return 'M';
    case 3:
      return 'M';
    case 4:
      return 'J';
    case 5:
      return 'V';
    case 6:
      return 'S';
    case 7:
      return 'D';
    default:
      return day;
  }
};

function SessionsToolType({ active, payload }) {
  if (active) {
    return (
      <div className={styles.tooltype}>
        <p>
          {payload[0].value}
          {' '}
          min
        </p>
      </div>
    );
  }
  return null;
}

function AverageSessionTime({ sessions }) {
  return (
    <div className={styles.AverageSessionTimeContainer}>
      <h2 className={styles.title}>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessions}
          strokeWidth={1}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              const div = document.querySelector('.AverageSessionTime_AverageSessionTimeContainer__92UHO');
              const windowWidth = div.clientWidth;
              const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100);
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
            }
          }}
          onMouseLeave={() => {
            const div = document.querySelector('.AverageSessionTime_AverageSessionTimeContainer__92UHO');
            div.style.background = 'rgba(255,0,0,1)';
          }}
        >
          <defs>
            <linearGradient id="paint0_linear_2_122" x1="309.906" y1="-1.97779" x2="-47.7754" y2="-1.97779" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="0.810441" stopColor="white" stopOpacity="0.403191" />
            </linearGradient>
          </defs>
          <XAxis
            type="category"
            dataKey="day"
            tickFormatter={dataKeyValue}
            tickLine
            stroke="none"
            padding={{ left: 2, right: 2 }}
            tick={{
              fontSize: 12, stroke: 'white', opacity: 0.5, fontWeight: 500,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, 'dataMax + 30']}
            hide
          />
          <Tooltip content={<SessionsToolType />} />
          <Line
            type="bump"
            dataKey="sessionLength"
            stroke="url(#paint0_linear_2_122)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'rgba(255,255,255, 0.3)',
              strokeWidth: 8,
              r: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

SessionsToolType.defaultProps = {
  active: undefined,
  payload: undefined,
};

SessionsToolType.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.string),
};

AverageSessionTime.propTypes = {
  sessions: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  ]).isRequired,
};
export default AverageSessionTime;
