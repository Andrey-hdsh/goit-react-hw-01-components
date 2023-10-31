import { StatisticsSection } from './statistics.styled';

export const Statistics = ({ stats , title }) => {
  return (
    <StatisticsSection>
      <div>
        {title && <h2>{title}</h2>}
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
