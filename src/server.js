import express from 'express';
import React from 'react';
import {render} from 'mjml-react';
import initi18Next from './i18next';
import Basic from './emails/basic';

const port = 3000;
const app = express();

app.get('*', async (req, res) => {
  const initialProps = await Basic.getInitialProps();
  const i18next = await initi18Next('de');
  const { html } = await render(<Basic t={i18next} {...initialProps} />, { validationLevel: 'soft' });
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));