import React, { useState, useCallback } from 'react';
import { Flex, Box } from '@rebass/grid';
import { Button, Input, SelectList } from '@zen/ui-lib';

import Api from '../Api';
import AddressListOptions from './AddressListOptions';

const formatPostcode = p => p.toString().toLowerCase().replace(/\s/g, '');

const postcodesMatch = (a, b) => formatPostcode(a) === formatPostcode(b);

const getAddressesForPostcode = (postcode) => {
  return Api.get('addresses')
    .then(r => r.data.filter(address => postcodesMatch(address.postcode, postcode)))
};

function AddressFinder({ onAddressSelected }) {
  const [postcode, setPostcode] = useState('');
  const [selectedAddressId, setSelectedAddressId] = useState(undefined);
  const [addresses, setAddresses] = useState([]);

  const handleSearch = useCallback(() => {
    getAddressesForPostcode(postcode).then(addresses => setAddresses(addresses));
  }, [postcode]);

  const handleSelect = useCallback(() => {
    onAddressSelected(addresses.find(address => address.id === selectedAddressId));
  }, [onAddressSelected, addresses, selectedAddressId]);

  return (
    <>
      <Flex>
        <Box pr={10}>
          <Input id="postcodeInput" placeholder="Please enter your postcode" value={postcode} onChange={event => setPostcode(event.target.value)} />
        </Box>
        <Box>
          <Button onClick={handleSearch}>Search</Button>
        </Box>
      </Flex>
      <Flex flexDirection="column">
        <Box>
          <SelectList id="addressList" size={4} onChange={event => setSelectedAddressId(event.target.value)}>
            <AddressListOptions addresses={addresses} />
          </SelectList>
        </Box>
        <Box ml="auto">
          <Button onClick={handleSelect}>Select</Button>
        </Box>
      </Flex>
    </>
  );
}

export default AddressFinder;
