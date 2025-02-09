const styles = {
  div: {
    textAlign: "start",
    display: "block",
    marginRight: "auto",
  },
  h1: {
    marginTop: "50px",
    marginBottom: "20px",
    marginRight: "auto",
  },
};

export default function Resume() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>Resume</h1>

      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>PostgreSQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
