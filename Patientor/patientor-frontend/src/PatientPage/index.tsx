import React from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Icon } from "semantic-ui-react";

import { Patient } from "../types";
import { apiBaseUrl } from "../constants";
import { useStateValue } from "../state";

const PatientPage: React.FC = () => {
  const [{ patient }, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    const fetchPatient = async () => {
      try {
        const { data: patientFromApi } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
          );
          dispatch({ type: "SET_PATIENT", payload: patientFromApi });
        } catch (e) {
        console.error(e);
      }
    };

    if ( (patient === undefined) || (patient.id !== id) ) {
      fetchPatient();
    }
    
  }, [dispatch, id, patient]);

  if ( !patient ) {
    return(<div>loading...</div>);
  }

  const genderIcon = ((patient.gender === 'male') 
                     ? 'man' 
                     : ((patient.gender === 'female') 
                       ? 'woman'
                       : 'genderless'))

  return (
    <div>
      <h1>{patient.name} <Icon name={genderIcon} /></h1>
      <p>ssn: {patient.ssn}</p>
      <p>occupation: {patient.occupation}</p>
    </div>
  );
};

export default PatientPage;
