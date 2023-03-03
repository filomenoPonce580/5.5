# 5.5

Instructions
To complete this practice problem, you will need to get all the tests to pass. To do so, complete the following:

Complete each function as described below.
Use the reduce() method in each function.
This practice problem should not take you longer than about 25 minutes. If you spend longer than that, reach out for help!

Dataset
Assume for all of the following problems that parks refers to a dataset that looks similar to the following.

const parks = [
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
    name: "Zion",
    areaInSquareKm: 595.9,
    location: { state: "Utah" },
  },
];
squareKmTotal()
Add up all of the areaInSquareKm values from each park object.

squareKmTotal(parks); //> 2703.6
parkNameAndState()
Return an object where each key is the name of a park and each value is the state that park is in.

parkNameAndState(parks);
/*
  {
    Canyonlands: "Utah",
    "Crater Lake": "Oregon",
    Zion: "Utah
  }
*/



parkByState()
Return an object where each key is the state and each value is an array of each park object associated with that state.

parkByState(parks);
/*
  {
    Utah: [
      {
        name: "Canyonlands",
        areaInSquareKm: 1366.2,
        location: { state: "Utah" },
      },
      {
        name: "Zion",
        areaInSquareKm: 595.9,
        location: { state: "Utah" },
      },
    ],
    Oregon: [
      {
        name: "Crater Lake",
        areaInSquareKm: 741.5,
        location: { state: "Oregon" },
      },
    ]
  }
*/
Note: Writing this function is tricky! Remember that you can write whatever code you want inside of the function passed to reduce().
