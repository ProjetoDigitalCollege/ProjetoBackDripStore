import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
  return response.send("Olá mundo!");
});

export default router;
