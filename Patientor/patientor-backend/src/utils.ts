/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewPatientEntry, Gender, EntryType, Entry } from './types';

const toNewPatientEntry = ( object: any ): NewPatientEntry => {
  return {
    name: parseString(object.name), 
    dateOfBirth: parseString(object.dateOfBirth),
    ssn: parseString(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseString(object.occupation),
    entries: parseEntry(object.entries),
  };
};

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseString = (str: any): string => {
  if (!str || !isString(str)) {
    throw new Error('Incorrect or missing str param: ' + str);
  }
  return str;
};


const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
      throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

const isEntry = (entry: any): entry is Entry[] => {
  return Object.values(EntryType).includes(entry);
};

const parseEntry = (entry: any): Entry[] => {
  if (!entry || !isEntry(entry)) {
    throw new Error('Incorrect or missing entry param: ' + entry);
  }
  return entry;
};


export default toNewPatientEntry;
