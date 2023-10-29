import css from './statistics_section.module.css';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.section}>
      <div className={css.statBlock}>
        {stats.length > 0 && (
          <h2
            style={{
              textAlign: 'center',
              padding: '10px 0 10px 0',
              backgroundColor: 'white',
              fontWeight: 400,
            }}
          >
            Upload stats
          </h2>
        )}
        <ul className={css.statList}>
          {stats.map(stat => (
            <li
              className={css.statItem}
              key={stat.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={css.statLabel}>{stat.label}</span>
              <span className={css.statPercentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
