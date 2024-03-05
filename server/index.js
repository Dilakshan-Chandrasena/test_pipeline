const express = require('express')

const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).json("Hello World")
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
