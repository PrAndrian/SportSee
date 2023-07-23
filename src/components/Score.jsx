import React from 'react'
import styles from '../styles/Score.module.css'
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'

const data = [
    {
        todayScore: 0.12,
    },
  ];

const Score = ({score}) => {
  return (
    <div className={styles.score}>
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
                cx="50%" cy="50%"       
                innerRadius='70%'
                outerRadius='70%'
                startAngle={180} 
                endAngle={-180}
                barSize={10} 
                data={data}
            >
                <PolarAngleAxis type="number" domain={[0, 1]} angleAxisId={0} tick={false} />
                <RadialBar
                    dataKey="todayScore"
                    background
                    clockWise={true}
                />
            </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Score