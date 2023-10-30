import { StatisticsSection } from './statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <StatisticsSection>
      <div>
        {stats.length > 0 && <h2>Upload stats</h2>}
        <ul>
          {stats.map(stat => (
            <li key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </StatisticsSection>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
