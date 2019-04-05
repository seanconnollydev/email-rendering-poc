import { render } from 'mjml-react';

import { generate } from './emails/basic';

const { html } = render(generate(), { validationLevel: 'soft' });
console.log(html);