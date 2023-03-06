import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { DevPanel } from '../../features/dev/components/DevPanel';

export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    });
  }, []);

  return (
    <Box minWidth="100%" minHeight={height} overflow="hidden">
      <DevPanel />
      <Box p={4}>{children}</Box>
    </Box>
  );
};
