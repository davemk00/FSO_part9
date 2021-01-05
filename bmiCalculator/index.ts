import express = require('express');
import { calculateBmi } from './calculateBmi';
import { exerciseCalculator } from './exerciseCalculator';
const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!height || !weight) {
    res.status(404).json({error: 'malformatted parameters'});
  }

  const bmi = calculateBmi(height, weight);

  res.status(200).json({height, weight, bmi});
});

app.post('/exercises', (request, response) => {
  const hours: Array<number> = request.body.daily_exercises; // eslint-disable-line
  const target: number = request.body.target; // eslint-disable-line


  if ( !hours || !target) {
    return response.status(404).json({error: 'parameter(s) missing'});
  }

  if ( !(typeof target === 'number') 
        || isNaN(target) 
        || !Array.isArray(hours) 
        || hours.some(x => isNaN(Number(x))) ) {
    return response.status(404).json({error: 'malformatted parameter(s)'});
  }



  return response.status(200).json(exerciseCalculator(hours, target));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});