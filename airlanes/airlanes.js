const flights = [
  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
const greetUser = () => {
  const userName = prompt("Hello introduce username");
  if (userName === null || userName === "") {
    alert("log in again");
    greetUser();
  } else {
    console.log(`Welcome board ${userName}!`);
  }
};

greetUser();

const aviableFlights = () => {
  console.log("Aviable flights are:");

  flights.forEach((fligth) => {
    if (fligth.scale === true) {
      fligth.scale = "has scale.";
    } else {
      fligth.scale = "has no scale.";
    }

    console.log(`\n${fligth.id}) Flight to ${fligth.to} from ${fligth.from} has a price of ${fligth.cost}€ and  ${fligth.scale} 
        \n`);
  });
};

aviableFlights();

const averageCost = () => {
  let totalPrice = 0;
  for (let i = 0; i < flights.length; i++) {
    totalPrice += flights[i].cost;
  }

  const averagePrice = totalPrice / flights.length;
  console.log(`The average price of a flight is ${averagePrice}€.`);
};

averageCost();

const stopOverFlights = () => {
  const stopOvers = [];

  flights.forEach((cheek) => {
    if (cheek.scale === "has no scale.") {
      stopOvers.push(flights.scale);
    }
  });
  console.log(`\nThere are ${stopOvers.length} flitghts with stopover.`);
};

stopOverFlights();

const showLastFlights = () => {
  console.log(`Today's last flights to: `);

  for (let i = flights.length - 5; i < flights.length; i++) {
    console.log(` => ${flights[i].to}`);
  }
};

showLastFlights();
