const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');

const UserRoutes = require("./routes/UserRoutes");
const OrderRoutes = require("./routes/OrderRoutes");

const port = process.env.PORT || 5000;

// Connect to database
connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", UserRoutes);
app.use("/api/orders", OrderRoutes);
// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: process.env.NODE_ENV === 'development',
//   })
// );

app.listen(port, console.log(`Server running on port ${port}`));