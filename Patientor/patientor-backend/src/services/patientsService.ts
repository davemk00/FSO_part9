import patientsData from '../../data/patients.json';
import { NonSensitivePatientEntry } from '../types';
import { PatientEntry } from '../types';

const patients: Array<PatientEntry> = patientsData as Array<PatientEntry>;

const getPatients = (): Array<PatientEntry> => {
  return patients;
};

const getNonSensitivePatients = (): NonSensitivePatientEntry [] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getPatients,
  getNonSensitivePatients
};