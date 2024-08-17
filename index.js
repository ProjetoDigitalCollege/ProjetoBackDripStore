import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { sequelize, initModels } from './models/init-models.js';
import routes from './routes/index.js';
// const { swaggerUi, specs } = require('./config/swagger'); // Comentado se estiver usando ES Modules

const app = express();
app.use(express.json());

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)); // Comentado se estiver usando ES Modules

// app.use('/api', routes);
app.use(routes);
const PORT = process.env.PORT || 3000;

// Inicialize os modelos
initModels();

// Autentique a conexão
sequelize.authenticate().then(() => {
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.log('Error: ' + err);
});
