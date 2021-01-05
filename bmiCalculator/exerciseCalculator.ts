interface TrainingReport { 
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface ExerciseData {
  target: number,
  hours: Array<number>
}

const parseExerciseArgs = (args: Array<string>): ExerciseData => {
  if (!args.some(x => isNaN(Number(x)))) {
    const target = Number(args[2]);
    const hours: Array<number> = args.slice(3).map((x) => +x);
    
    return {
      target: target,
      hours: hours,
    }

  } else {
    throw new Error("Argument(s) given are not numbers") 
  }
}

const exersiceCalculator = (args: Array<number>, target: number): TrainingReport => {
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

try {
  const { target, hours } = parseExerciseArgs(process.argv);
  console.log(exersiceCalculator(hours, target));
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}

