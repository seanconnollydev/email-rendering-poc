import React from 'react';
import { render } from 'react-testing-library';
import Basic from '../basic';

test('Basic', () => {
  const user = { name: 'John Doe' };
  const { debug, getByTestId } = render(<Basic user={user} />);

  debug();

  expect(getByTestId('user-greeting')).toHaveTextContent('Hey John Doe');
});