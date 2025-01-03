import app from './app.js';
const port = process.env.PORT || 3337;

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
