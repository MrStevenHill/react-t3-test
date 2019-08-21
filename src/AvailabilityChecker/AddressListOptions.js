import React from 'react';
import { SelectList } from '@zen/ui-lib';

import { formatFullAddress } from './AvailabilityChecker';

const Option = SelectList.Option;

const AddressListOptions = ({ addresses }) => addresses.map(address => <Option key={address.id} value={address.id}>{formatFullAddress(address)}</Option>);

export default AddressListOptions;
