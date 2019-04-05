import React from 'react';
import { render } from 'mjml-react';
import Basic from './emails/basic';

(async () => {
  const initialProps = await Basic.getInitialProps();
  const { html } = await render(<Basic {...initialProps} />, { validationLevel: 'soft' });
  console.log(html);
})();