import express from 'express';
import patientsService from '../services/patients';
import toNewPatientEntry from '../utils';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  res.send(patientsService.getNonSensitivePatients());
});

patientsRouter.post('/', (req,res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedEntry = patientsService.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

patientsRouter.get('/:id', (req, res) => {
  // console.log('route');
  if (req.params.id) {
    const patient = patientsService.getPatientById(req.params.id);
    if (patient) {
      res.send(patient);
    } else {
      res.status(400).end();
    }
  } else {
    res.status(400).end();
  }
});

export default patientsRouter;