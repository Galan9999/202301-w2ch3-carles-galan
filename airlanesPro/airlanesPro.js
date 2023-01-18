const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
const greetUser = () => {
  let userName = prompt("Hello introduce username");
  if (userName === null) {
    return;
  }
  if (userName === "") {
    alert("log in again");
    greetUser();
  } else {
    console.log(`Welcome board ${userName}!`);
  }
};

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

const averageCost = () => {
  let totalPrice = 0;
  for (let i = 0; i < flights.length; i++) {
    totalPrice += flights[i].cost;
  }
  const averagePrice = totalPrice / flights.length;
  console.log(`The average price of a flight is ${averagePrice}€.`);
};

const stopOverFlights = () => {
  stopOvers = [];

  flights.forEach((cheek) => {
    if (cheek.scale === "has no scale.") {
      return;
    } else {
      stopOvers.push(flights.scale);
    }
  });
  console.log(`There are ${stopOvers.length} flitghts with stopover.`);
};

const showLastFlights = () => {
  console.log(`Today's last flights to: `);

  for (let i = flights.length - 5; i < flights.length; i++) {
    console.log(`${flights[i].to}`);
  }
};

const createFlight = () => {
  const newFlight = {};
  const newId = flights[flights.length - 1].id + 1;
  newFlight.id = newId;
  do newFlight.to = prompt("TO CITY");
  while (!isNaN(newFlight.to) || newFlight.to === "" || newFlight.to === null);
  do newFlight.from = prompt("FROM CITY");
  while (
    !isNaN(newFlight.from) ||
    newFlight.from === "" ||
    newFlight.from === null
  );
  do newFlight.cost = +prompt("COST");
  while (
    isNaN(newFlight.cost) ||
    newFlight.cost === 0 ||
    newFlight.cost === null
  );
  newFlight.scale = confirm("ENTER = SCALE / CANCEL = NOT SCALE");
  flights.push(newFlight);
};

const deleteFlight = () => {
  const idRemove = Number(prompt("Introduce el ID para borrar los vuelos"));
  flights.splice(idRemove, 1);
  alert(`El vuelo con ID: ${idRemove} ha sido eliminado`);
};

const askForAction = () => {
  const action = prompt("Do you want to CREATE or DELETE");
  if (action === null) {
    return;
  } else if (
    action.toUpperCase() !== "CREATE" &&
    action.toUpperCase() !== "DELETE"
  ) {
    alert("enter valid action");
    askForAction();
  } else {
    return action.toUpperCase();
  }
};

const adminActions = () => {
  let adminActionResult = askForAction();
  let keepAdding;
  let keepDeleting;
  if (adminActionResult === "CREATE") {
    do {
      if (flights.length === 15) {
        keepAdding = false;
        alert("You can not create more flights");
        return;
      }
      createFlight();
      keepAdding = confirm("Do you want to create another?");
    } while (keepAdding === true);
  }
  if (adminActionResult === "DELETE") {
    do {
      if (flights.length === 0) {
        keepDeleting = false;
        alert("all flights deleted");
        return;
      }
      deleteFlight();
      keepDeleting = confirm("Do you want a delete another?");
    } while (keepDeleting === true);
  }
};

const userActions = () => {
  let maxPrice = +prompt("Introduce Maxprice");

  let cheaperFlights = [];

  console.log("You cheaper flights are:");
  flights.map((flight) => {
    if (maxPrice <= flight.cost) {
      cheaperFlights.push(flight);
      console.log(`\n${flight.id}) Flight to ${flight.to} from ${flight.from} has a price of ${flight.cost}€ and  ${flight.scale} 
    \n`);
    }
  });
};

const cheekCredentials = () => {
  const userOrAdmin = prompt("Are you ADMIN/USER?");
  if (userOrAdmin === null) {
    return;
  } else if (
    userOrAdmin.toUpperCase() !== "ADMIN" &&
    userOrAdmin.toUpperCase() !== "USER"
  ) {
    alert("You have to identify as USER or ADMIN");
    cheekCredentials();
  } else {
    return userOrAdmin.toUpperCase();
  }
};

const playApp = () => {
  greetUser();
  aviableFlights();
  averageCost();
  stopOverFlights();
  showLastFlights();
  if (cheekCredentials() === "USER") {
    userActions();
  } else {
    adminActions();
    aviableFlights();
  }
};
playApp();
