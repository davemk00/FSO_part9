import patientsData from '../../data/patients';
import { NonSensitivePatientEntry, PatientEntry, NewPatientEntry } from '../types';
import { v4 as uuidv4 } from 'uuid';

const patients: Array<PatientEntry> = patientsData as Array<PatientEntry>;

const getPatients = (): Array<PatientEntry> => {
  return patients;
};

const getNonSensitivePatients = (): NonSensitivePatientEntry [] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries,
  }));
};

const addPatient = ( patient: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuidv4(),
    ...patient,
  };
  
  patients.push(newPatientEntry);
  return newPatientEntry;
};

const getPatientById = ( id: String ): PatientEntry | undefined => {
  const patient = patients.find(p => p.id === id);
  // console.log("patient by id:: ");
  // console.log(patient);
  return patient;
};

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient,
  getPatientById,
};