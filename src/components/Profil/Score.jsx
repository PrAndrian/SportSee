import React from 'react'
import styles from '../../styles/Score.module.css'
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'

const Score = ({score}) => {
  return (
    <div className={styles.score}>
        <h2 className={styles.scoreTitle}>Score</h2>
        <span className={styles.scoreValue}>
          {score*100+"%"}
          <p className={styles.objectifSentence}>de votre <br/> objectif</p>
        </span>
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
                cx="50%" cy="50%"       
                innerRadius='70%'
                outerRadius='70%'
                startAngle={90} 
                endAngle={450}
                barSize={10} 
                data={[{todayScore : score}]}
            >
                <PolarAngleAxis 
                  type="number" 
                  domain={[0, 1]} 
                  angleAxisId={0} 
                  tick={false} 
                />
                <RadialBar
                    dataKey="todayScore"
                    radius={[10]}
                    fill="#E60000"
                    cornerRadius={30 / 2}
                />
            </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Score