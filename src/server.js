import express from 'express';
import renderEmailHtml from './renderEmailHtml';

const port = 3000;
const app = express();

app.get('/preview/:templateId', async (req, res) => {
  const html = await renderEmailHtml({ templateId: req.params.templateId });
  res.send(html);
});

app.get('*', async (req, res) => {
  const html = await renderEmailHtml({ templateId: 'basic' });
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));