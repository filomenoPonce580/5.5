/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

const parks = [
    { 
      name: "Acadia",
      areaInSquareKm: 198.6, 
      location: { state: "Maine" } },
    {
      name: "Canyonlands",
      areaInSquareKm: 1366.2,
      location: { state: "Utah" },
    },
    {
      name: "Crater Lake",
      areaInSquareKm: 741.5,
      location: { state: "Oregon" },
    },
    {
      name: "Lake Clark",
      areaInSquareKm: 10602,
      location: { state: "Alaska" },
    },
    {
      name: "Kenai Fjords",
      areaInSquareKm: 2710,
      location: { state: "Alaska" },
    },
    {
      name: "Zion",
      areaInSquareKm: 595.9,
      location: { state: "Utah" },
    },
];


function squareKmTotal(parks) {
    return parks.map(park => park.areaInSquareKm).reduce((acc, c)=> acc + c,0)
}

function parkNameAndState(parks){
    return parks.reduce((result, park)=>{
        result[park.name] = park.location.state;
        return result;
    }, {})
}

function parkByState(parks) {
    return parks.reduce((result, park)=>{
        const state = park.location.state;
        result[state] = parks.filter(park=>park.location.state === state);
        //result[state].push()

        return result;
    }, {})
}

console.log(parkByState(parks))
