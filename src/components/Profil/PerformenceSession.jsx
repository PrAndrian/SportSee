/* eslint-disable linebreak-style */
import React from 'react';
import {
  PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import styles from '../../styles/PerformenceSession.module.css';

/**
 * Valeur de la datakey pour le graphe PerformenceSession
 *
 * @param {number} day - Prop représentant le chiffre de la catégorie performance.
 * @returns {string} Le label de la catégorie performance associée au chiffre.
 */
const dataKeyValue = (kind) => {
  switch (kind) {
    case 1:
      return 'Intensité';
    case 2:
      return 'Vitesse';
    case 3:
      return 'Force';
    case 4:
      return 'Endurance';
    case 5:
      return 'Energie';
    case 6:
      return 'Cardio';
    default:
      return kind;
  }
};

/**
 * Composant représantant le graphe de performences de sessions
 *
 * @component
 * @param {Object} sessions - un prop représentant les performances des sessions de l'utilisateur
 * @returns {JSX.Element} Le composant React.
 */
function PerformenceSession({ performence }) {
  return (
    <div className={styles.PerformenceSession}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="65%"
          data={performence}
        >
          <PolarGrid gridType="polygon" />

          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={dataKeyValue}
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
          />

          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
PerformenceSession.propTypes = {
  performence: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.objectOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  ]).isRequired,
};
export default PerformenceSession;
