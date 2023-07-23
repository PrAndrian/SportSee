import React from 'react'
import styles from '../../styles/DailyActiveChart.module.css'
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

const DailyActiveChart = ({sessions}) => {
  return (
    <div className={styles.dailyActiveChartContainer}>
      <h2 className={styles.title}>Activité quotidienne</h2>
      <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={sessions}
            margin={{ top: 100, right: 48, bottom: -20, left: 50 }}
            barGap={8}
            barCategoryGap="35%"
            style={{
              backgroundColor:"#FBFBFB",
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
              domain={["dataMin - 1", "dataMax + 2"]}
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
              domain={[0, "dataMax + 50"]}
              hide={true}
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
              fill: "rgba(0, 0, 0, 0.1)",
              }}
          />

          <Legend wrapperStyle={{width:200,top:0,right:158 }} content={<CusomizedLegend />}/>

          </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function CustomTooltip({ active, payload }) {
    if (active && payload) {
      return (
        <div className={styles.tooltip_container}>
          <p background='#2b2d30'>
            {`${payload[0].value}kg`}
          </p>
          <p background='#2b2d30'>
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
      <p><span></span> Poids (kg)</p>
      <p><span></span>Calories brûlées (kCal)</p>
    </div>
  );
}

let dataKeyValue = (day) => {
  const date = new Date(day);
  const dataKey = date.getDate();
  dataKey.toString();
  console.log(typeof dataKey);
  return dataKey;
};

export default DailyActiveChart