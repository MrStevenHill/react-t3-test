import React, { useCallback } from 'react';
import { Card, CardBody } from '@zen/ui-lib';

import AddressFinder from './AddressFinder';

const formatFullAddress = (address) => `${address.street}, ${address.town}, ${address.postcode}`;

const AvailabilityChecker = () => {
  const handleAddressSelected = useCallback(address => {
    if (address) window.alert(`Address selected: ${formatFullAddress(address)}`);
  }, []);

  return (
    <Card>
      <CardBody>
        <h1>Check Availability</h1>
        <AddressFinder onAddressSelected={handleAddressSelected} />
      </CardBody>
    </Card>
  );
}

export default AvailabilityChecker;
export { formatFullAddress };
