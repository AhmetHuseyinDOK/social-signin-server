require('dotenv').config(); 
const express = require('express')
const app = express();
const port =  process.env.PORT || 3000;
const bodyparser =  require('body-parser'); 
const logger = require('./middlewares/log');
//import utils here if you wanna change protypes
const WelcomeController = require('./controllers/welcome');
const GoogleAuthController = require('./controllers/google-auth');
//middlewares
app.use(bodyparser.json());
app.use(logger.start);

//routes can be registered here
app.get('/', WelcomeController.index);
app.post('/verifyGoogle',GoogleAuthController.verify);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))