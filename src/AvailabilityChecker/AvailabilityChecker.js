import React, { useCallback } from 'react';
import { Card, CardBody } from '@zen/ui-lib';

import AddressFinder from './AddressFinder';

const formatFullAddress = (address) => `${address.street}, ${address.town}, ${address.postcode}`;

const postcodesMatch = (a, b) => (
  a.toString().toLowerCase().replace(/\s/g, '') === b.toString().toLowerCase().replace(/\s/g, '')
);

const getAddressesForPostcode = async (postcode) => {
  await fetch(`https://api-mrstevenhill.herokuapp.com/addresses`)
    .then(r => r.filter(address => postcodesMatch(address.postcode, postcode)));
};

const AvailabilityChecker = () => {
  const handleAddressSelected = useCallback(address => {
    if (address) window.alert(`Address selected: ${formatFullAddress(address)}`);
  }, []);

  return (
    <Card>
      <CardBody>
        <h1>Check Availability</h1>
        <AddressFinder getAddressesForPostcode={getAddressesForPostcode} onAddressSelected={handleAddressSelected} />
      </CardBody>
    </Card>
  );
}

export default AvailabilityChecker;
export { formatFullAddress };
