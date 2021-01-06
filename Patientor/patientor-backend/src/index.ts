import express from 'express';
const app = express();
app.use(express.json());
import cors from 'cors';

const PORT = 3001

app.use(cors());

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pongy');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});