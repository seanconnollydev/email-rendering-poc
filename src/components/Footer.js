import React from 'react';
import {
  MjmlSection,
  MjmlColumn,
  MjmlText
} from 'mjml-react';

const Footer = () => (
  <MjmlSection fullWidth backgroundColor="#efefef">
    <MjmlColumn>
      <MjmlText align="center">Powered by Gloo</MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export default Footer;