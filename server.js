const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const studentsList = [
  {
    id: 1,
    name: "Khatteche",
    lastName: "Mohamed Joud",
    gender: "Homme",
    birthDate: "2020-08-31T00:00:00",
    section: "Mathematique",
    email: "djoekhatteche@gmail.com",
    score: [
      {
        firstTermScore: 15,
        secondTermScore: 16,
        thirdTermScore: 17,
      },
    ],
  },
  {
    id: 2,
    name: "Ben Abdallah",
    lastName: "Bechir",
    gender: "Homme",
    birthDate: "2019-10-31T00:00:00",
    section: "Informatique",
    email: "biboubenabdallah@gmail.com",
    score: [
      {
        firstTermScore: 14,
        secondTermScore: 15,
        thirdTermScore: 16,
      },
    ],
  },
  {
    id: 3,
    name: "Chilly",
    lastName: "Islem",
    gender: "Femme",
    birthDate: "2010-12-10T00:00:00",
    section: "Informatique",
    email: "islemchelly@gmail.com",
    score: [
      {
        firstTermScore: 13,
        secondTermScore: 14,
        thirdTermScore: 15,
      },
    ],
  },
  {
    id: 4,
    name: "Bhouri",
    lastName: "Chadiya",
    gender: "Femme",
    birthDate: "2017-08-17T00:00:00",
    section: "Lettre",
    email: "chadiyabhouri@gmail.com",
    score: [
      {
        firstTermScore: 10,
        secondTermScore: 9,
        thirdTermScore: 9,
      },
    ],
  },
  {
    id: 5,
    name: "Sokrat",
    lastName: "Jawaher",
    gender: "Femme",
    birthDate: "1998-06-07T00:00:00",
    section: "Science naturelle",
    email: "jawahersokrat@gmail.com",
    score: [
      {
        firstTermScore: 10,
        secondTermScore: 7,
        thirdTermScore: 8,
      },
    ],
  },
  {
    id: 6,
    name: "Ksouri",
    lastName: "Bayrem",
    gender: "Homme",
    birthDate: "2005-11-30T00:00:00",
    section: "Science naturelle",
    email: "bayremksouri@gmail.com",
    score: [
      {
        firstTermScore: 6,
        secondTermScore: 8,
        thirdTermScore: 7,
      },
    ],
  },
  {
    id: 7,
    name: "Fehri",
    lastName: "Riadh",
    gender: "Homme",
    birthDate: "2013-10-25T00:00:00",
    section: "Mathematique",
    email: "riadhfehri@gmail.com",
    score: [
      {
        firstTermScore: 10,
        secondTermScore: 11,
        thirdTermScore: 12,
      },
    ],
  },
  {
    id: 8,
    name: "Barhoumi",
    lastName: "Ibtissem",
    gender: "Femme",
    birthDate: "2007-07-19T00:00:00",
    section: "Lettre",
    email: "ibtissembarhoumi@gmail.com",
    score: [
      {
        firstTermScore: 13,
        secondTermScore: 15,
        thirdTermScore: 17,
      },
    ],
  },
  {
    id: 9,
    name: "Akrout",
    lastName: "Sondes",
    gender: "Femme",
    birthDate: "2001-03-13T00:00:00",
    section: "Lettre",
    email: "sondesakrout@gmail.com",
    score: [
      {
        firstTermScore: 8,
        secondTermScore: 9,
        thirdTermScore: 10,
      },
    ],
  },
  {
    id: 10,
    name: "Kanzari",
    lastName: "Anouar",
    gender: "Homme",
    birthDate: "2016-08-24T00:00:00",
    section: "Mathematique",
    email: "anouarkanzari@gmail.com",
    score: [
      {
        firstTermScore: 13,
        secondTermScore: 14,
        thirdTermScore: 15,
      },
    ],
  },
];
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.get("/api/get-students", (req, res) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json(studentsList);
});

app.listen(3001, () => {
  console.log("Server started on 3001");
});
