import express from 'express';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  res.send('patientsRouter!');
})

export default patientsRouter;