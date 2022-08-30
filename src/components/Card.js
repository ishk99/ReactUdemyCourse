import "./UI/Card.css";

function Card(prop) {
  const classes = `card ${prop.className}`;
  return <div className={classes}>{prop.children}</div>;
}

export default Card;

//so we aply styling here because basically Card needs to apply CSS to eveything between the closing and opening tags
