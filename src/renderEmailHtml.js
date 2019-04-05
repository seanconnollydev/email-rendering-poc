import React from 'react';
import {render} from 'mjml-react';
import initi18Next from './i18next';
import Basic from './emails/basic';

const renderEmailHtml = async (options) => {
  const { templateId, language } = options;
  if (!templateId) throw new Error('templateId is required');

  const Template = require(`./emails/${templateId}`).default;
  if (!Template) throw new Error('Unable to find template with id', templateId);

  const initialProps = await Template.getInitialProps();
  const i18next = await initi18Next(language);
  const { html } = await render(<Template t={i18next} {...initialProps} />, { validationLevel: 'soft' });
  return html;
};

export default renderEmailHtml;