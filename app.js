const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const router = require("./routes");

//Middlewares
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(router);

// app.use('/', (req, res) => {
//     // res.send("Ini page home");
//      res.render('error.ejs');
// });

app.listen(PORT, () => {
	console.log(`Server is running at port : ${PORT}`);
});
