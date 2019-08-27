import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Theme } from '@zen/ui-lib';
import renderer from 'react-test-renderer';
import axios from 'axios';
import 'jest-styled-components'

import AddressFinder from '../AvailabilityChecker/AddressFinder';

jest.mock('axios');

const response = {
  data: [
    { "id": "1", "street": "1 Test Street", "town": "Test Town", "postcode": "TE3 5ST" },
    { "id": "2", "street": "2 Test Street", "town": "Test Town", "postcode": "TE3 5ST" }
  ]
};

describe('EZ AddressFinder component', () => {
  describe('when passed a postcode with matching addresses', () => {
    it('should display the matching addresses', () => {
      axios.get.mockResolvedValue(response);

      const wrapper = mount(
        <Theme><AddressFinder postcode="TE3 5ST" /></Theme>
      );

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });
});

describe('RTR AddressFinder component', () => {
  describe('when passed a postcode with matching addresses', () => {
    it('should display the matching addresses', () => {
      axios.get.mockResolvedValue(response);

      const finder = renderer.create(
        <Theme><AddressFinder postcode="TE3 5ST" /></Theme>
      ).toJSON();

      expect(finder).toMatchSnapshot();
    });
  });
});
