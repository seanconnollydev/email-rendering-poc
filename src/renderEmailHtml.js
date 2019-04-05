import React from 'react';
import {render} from 'mjml-react';
import initi18Next from './i18next';
import Basic from './emails/basic';

const renderEmailHtml = async () => {
  const initialProps = await Basic.getInitialProps();
  const i18next = await initi18Next('de');
  const { html } = await render(<Basic t={i18next} {...initialProps} />, { validationLevel: 'soft' });
  return html;
};

export default renderEmailHtml;