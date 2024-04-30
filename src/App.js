const data = [
  {
    icon: "./images/icon-sedans.svg",
    title: "sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    textButton: "Learn More",
  },
  {
    icon: "./images/icon-suvs.svg",
    title: "suvs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    textButton: "Learn More",
  },
  {
    icon: "./images/icon-luxury.svg",
    title: "luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    textButton: "Learn More",
  },
];

function Heading() {
  return <h1 className="sr-only">welcome to our autoshop</h1>;
}

function Card(props) {
  return (
    <div className="cards__item">
      <div className="cards__item__icon">
        <img src={props.icon} alt={props.title} />
      </div>
      <h2 className="cards__item__title">{props.title}</h2>
      <p className="cards__item__p">{props.description}</p>
      <a href="https://github.com/antoru" className="cards__item__a">
        {props.textButton}
      </a>
    </div>
  );
}

function Cards() {
  return (
    <div className="cards">
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            textButton={item.textButton}
          />
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <main className="component">
      <Heading />
      <Cards />
    </main>
  );
}
