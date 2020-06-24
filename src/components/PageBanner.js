import React from "react";
export default function PageBanner(prop) {
  const styles = {
    height: "25em",
    width: "100%",
    backgroundImage: `url(${prop.banner})`,
    filter: "blur(2px)",
    WebkitFilter: "blur(1px)",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <React.Fragment>
      <div style={styles}></div>
      <h1 className="bg-text">{prop.text}</h1>
    </React.Fragment>
  );
}
