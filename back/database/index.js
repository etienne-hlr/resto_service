const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://etienne_hr:DpdD9QWywuY091sv@clusterserviceresto.psxufo7.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connexion DB Ok");
  })
  .catch((e) => {
    console.log(`Erreur connexion DB : ${e}`);
  });
