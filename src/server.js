import express from 'express';
import renderEmailHtml from './renderEmailHtml';

const port = 3000;
const app = express();

app.get('*', async (req, res) => {
  const html = await renderEmailHtml();
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));