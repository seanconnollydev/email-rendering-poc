import React from 'react';
import axios from 'axios';

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlFont,
} from 'mjml-react';

const Small = () => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Custom Fonts</MjmlTitle>
        <MjmlFont name="Open Sans" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,400italic,700italic&subset=latin" />
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlSection fullWidth backgroundColor="#efefef">
          <MjmlColumn>
            <MjmlText font-family="Open Sans, Arial" align="center">This is a custom Google font.</MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

export default Small;
