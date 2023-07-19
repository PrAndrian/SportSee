import React from 'react'
import styles from '../styles/DailyActiveChart.module.css'
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

const data = [
  {
    day: '2020-07-01',
    kilogram: 80,
    calories: 240
},
{
    day: '2020-07-02',
    kilogram: 80,
    calories: 220
},
{
    day: '2020-07-03',
    kilogram: 81,
    calories: 280
},
{
    day: '2020-07-04',
    kilogram: 81,
    calories: 290
},
{
    day: '2020-07-05',
    kilogram: 80,
    calories: 160
},
{
    day: '2020-07-06',
    kilogram: 78,
    calories: 162
},
{
    day: '2020-07-07',
    kilogram: 76,
    calories: 390
}
];

const DailyActiveChart = () => {
  return (
    <>
        <h2>Activité quotidienne</h2>
        <ResponsiveContainer width='100%' height='100%'>
            <BarChart
              data={data}
              margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
              barGap={8}
              barCategoryGap="35%"
              style={{
                  backgroundColor:"#FBFBFB",
                  paddingTop:"20px",
                  paddingBottom:"20px",
                  paddingRight:"20px",
                  paddingleft:"20px",
              }}
            >

            <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#DEDEDE"
            />

            <XAxis 
                // dataKey="day"
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
    </>
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
export default DailyActiveChart