const distances = [
  {
    start: "Chennai",
    end: "Viluppuram",
    distance: 166,
  },
  {
    start: "Viluppuram",
    end: "Trichy",
    distance: 165,
  },
  {
    start: "Trichy",
    end: "Madurai",
    distance: 138,
  },
  {
    start: "Madurai",
    end: "Tirunelveli",
    distance: 171,
  },
  {
    start: "Tirunelveli",
    end: "Kanyakumari",
    distance: 85,
  },
  {
    start: "Trichy",
    end: "Karur",
    distance: 83,
  },
];
const routes = [
  {
    start: "Chennai",
    end: "Trichy",
    stops: ["Chennai", "Viluppuram", "Trichy"],
  },
  {
    start: "Chennai",
    end: "Karur",
    stops: ["Chennai", "Viluppuram", "Trichy", "Karur"],
  },
  {
    start: "Trichy",
    end: "Tirunelveli",
    stops: ["Trichy", "Madurai", "Tirunelveli"],
  },
];

const getTotalDistance = ((route) => {
  let totalDistance = 0;
  route.stops.map((stop,index)=>{
  if (index < route.stops.length - 1) {
    const distance = distances.find(
      (distance) =>
        distance.start === route.stops[index] &&
        distance.end === route.stops[index + 1],
    );
    distance ? (totalDistance += distance.distance) : 0;
  }
  });
  return totalDistance;
});


const main= ()=>routes.map(getTotalDistance);
console.log(main());
 


