import { useState } from "react";

function CreateCard({ appLink, appName, ghLink, bgImg }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }
  const styles = {
    div: {
      backgroundImage: `url(${bgImg})`,
      width: "300px",
      height: "200px",
      border: "2px solid black",
      borderRadius: "5%",
      flexWrap: "wrap",
      margin: "5%",
      display: "flex",
    },
    img: {
      width: "30px",
      height: "30px",
    },
    a: {
      fontSize: "24px",
      textDecoration: "none",
      fontFamily: "sans-serif",
      color: "white",
      margin: "10px",
      padding: "10px",
      textShadow: `
        -1px -1px 1px black,  
        1px -1px 1px black,
        -1px 1px 1px black,
        1px 1px 1px black`,
    },
  };

  return (
    <div
      style={styles.div}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <>
          <a
            href={appLink}
            target="_blank"
            style={styles.a}
            class="align-self-center"
          >
            {appName}
          </a>
          <a href={ghLink} target="_blank" class="align-self-center">
            <img src="../images/github.webp" style={styles.img} />
          </a>
        </>
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <>
      <CreateCard
        appLink={"https://challenge-9-pfmb.onrender.com/"}
        appName={"Weather Dashboard"}
        ghLink={"https://github.com/mnorris3/challenge-9"}
        bgImg={"../images/weather.png"}
      />
      <CreateCard
        appLink={"https://github.com/mnorris3/challenge-10"}
        appName={"Employee Tracker"}
        ghLink={"https://github.com/mnorris3/challenge-10"}
        bgImg={"../images/employee.png"}
      />
      <CreateCard
        appLink={"https://github.com/mnorris3/challenge-8"}
        appName={"Vehicle Maker"}
        ghLink={"https://github.com/mnorris3/challenge-8"}
        bgImg={"../images/vehicle.png"}
      />
      <CreateCard
        appLink={"https://github.com/mnorris3/challenge-7"}
        appName={"README Generator"}
        ghLink={"https://github.com/mnorris3/challenge-7"}
        bgImg={"../images/README.png"}
      />
    </>
  );
}
