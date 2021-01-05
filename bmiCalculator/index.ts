import express = require('express');
const app = express();
import calculateBmi from './calculateBmi';

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


const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});