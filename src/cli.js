import React from 'react';
import { render } from 'mjml-react';
import initi18Next from './i18next';
import Basic from './emails/basic';

(async () => {
  const initialProps = await Basic.getInitialProps();
  const i18next = await initi18Next('en');
  // console.log(new.t('key'));
  const { html } = await render(<Basic t={i18next} {...initialProps} />, { validationLevel: 'soft' });
  console.log(html);
})();