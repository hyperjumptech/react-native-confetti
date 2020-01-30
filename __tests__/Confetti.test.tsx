import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

import Confetti from '../src/Confetti'

test('renders correctly', () => {
  const component = renderer.create(
    <Confetti 
      isEnabled={true}
      color="#000"
      character="*"
    />
  ).toJSON();
  expect(component).toBeTruthy();
});

test('renders pieces character more than one', () => {
  const {getAllByTestId} = render(
    <Confetti 
      isEnabled={true}
      color="#000"
      character="*"
    />
  )
  expect(getAllByTestId('test:piece_character').length).toBeGreaterThan(0);
});