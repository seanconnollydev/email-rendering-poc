import express from 'express';
import React from 'react';
import {render} from 'mjml-react';

import Basic from './emails/basic';

const port = 3000;
const app = express();

app.get('*', async (req, res) => {
  const initialProps = await Basic.getInitialProps();
  const { html } = await render(<Basic {...initialProps} />, { validationLevel: 'soft' });
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));