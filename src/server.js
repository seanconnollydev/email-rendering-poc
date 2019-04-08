import express from 'express';
import cors from 'cors';
import reload from 'reload';
import renderEmailHtml from './renderEmailHtml';

const port = 3000;
const app = express();

app.use(cors());

app.get('/preview/:templateId', async (req, res) => {
  const { html } = await renderEmailHtml({ templateId: req.params.templateId, language: 'de' });
  res.send(html);
});

// app.get('*', async (req, res) => {
//   const { html } = await renderEmailHtml({ templateId: 'basic', language: 'de' });
//   res.send(html);
// });

reload(app).then(() => {
  app.listen(port, () => console.log(`Listening on port ${port}!`));
});
