/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import styles from '../../styles/DailyActiveChart.module.css';

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    console.log(active);
    return (
      <div className={styles.tooltip_container}>
        <p>
          {`${payload[0].value}kg`}
        </p>
        <p>
          {`${payload[1].value}KCal`}
        </p>
      </div>
    );
  }

  return null;
}

function CusomizedLegend() {
  return (
    <div className={styles.legend_container}>
      <p>
        <span />
        {' '}
        Poids (kg)
      </p>
      <p>
        <span />
        Calories brûlées (kCal)
      </p>
    </div>
  );
}

const dataKeyValue = (day) => {
  const date = new Date(day);
  const dataKey = date.getDate();
  dataKey.toString();
  return dataKey;
};

function DailyActiveChart({ sessions }) {
  const [mouseXpos, setMouseXpos] = useState(0);
  return (
    <div className={styles.dailyActiveChartContainer}>
      <h2 className={styles.title}>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sessions}
          margin={{
            top: 100, right: 48, bottom: 0, left: 50,
          }}
          barGap={8}
          barCategoryGap="35%"
          style={{
            backgroundColor: '#FBFBFB',
          }}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              setMouseXpos(e.activeCoordinate.x);
            }
          }}
        >

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#DEDEDE"
          />

          <XAxis
            dataKey="day"
            tickFormatter={dataKeyValue}
            dy={16}
            padding={{ left: -48, right: -48 }}
            stroke="#9b9eac"
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />

          <YAxis
            yAxisId="kg"
            tickCount={3}
            dataKey="kilogram"
            domain={['dataMin - 1', 'dataMax + 2']}
            allowDecimals={false}
            dx={48}
            orientation="right"
            stroke="#9b9eac"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            domain={[0, 'dataMax + 50']}
            hide
          />

          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            maxBarSize={8}
            fill="#2b2d30"
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            maxBarSize={8}
            fill="#ff0101"
            radius={[50, 50, 0, 0]}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              fill: 'rgba(0, 0, 0, 0.1)',
            }}
            position={{ x: mouseXpos + 80, y: 60 }}
          />

          <Legend wrapperStyle={{ width: 200, top: 0, right: 158 }} content={<CusomizedLegend />} />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

CustomTooltip.defaultProps = {
  active: undefined,
  payload: undefined,
};
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ])),
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.string,
  ]))),
};
DailyActiveChart.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  )).isRequired,
};
export default DailyActiveChart;
