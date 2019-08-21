import React from 'react';
import { Theme } from '@zen/ui-lib';
import { Flex, Box } from '@rebass/grid';

import AvailabilityChecker from './AvailabilityChecker';

function App() {
  return (
    <Theme>
      <Flex>
        <Box m='auto'>
          <AvailabilityChecker />
        </Box>
      </Flex>
    </Theme>
  );
}

export default App;
