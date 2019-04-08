import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import axios from 'axios';

storiesOf('Demo', module)
  .add('Basic', () => {
    const container = document.createElement('div');
    axios.get('http://localhost:3000/preview/basic')
      .then(resp => {
        container.innerHTML = resp.data;
      });
    return container;
  })
  .add('Custom Font', () => {
    const container = document.createElement('div');
    axios.get('http://localhost:3000/preview/custom-font')
      .then(resp => {
        container.innerHTML = resp.data;
      });
    return container;
  })
  .add('Small', () => {
    const container = document.createElement('div');
    axios.get('http://localhost:3000/preview/small')
      .then(resp => {
        container.innerHTML = resp.data;
      });
    return container;
  });
