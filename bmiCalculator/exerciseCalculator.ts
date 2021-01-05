interface TrainingData { 
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const exersiceCalculator = (args: Array<number>, target: number): TrainingData => {
  const periodLength = args.length;
  const trainingDays = args.filter(x => x>0).length;
  const sumHours = args.reduce((a, b) => a + b);
  const average = sumHours/periodLength;
  let rating = 0
  let ratingDescription = "issue"

  if (average > target) {
    rating = 1;
    ratingDescription = "target met";
  } else if (average > (target * 0.9)) {
    rating = 2;
    ratingDescription = "close but could be better";
  } else {
    rating = 3;
    ratingDescription = "target missed, hit it next time";
  } 
  
  return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: average > target,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average,
  }
}

const hours = [3, 0, 2, 4.5, 0, 3, 1]
const target = 2
console.log(exersiceCalculator(hours, target));