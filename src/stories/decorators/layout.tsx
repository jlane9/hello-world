import React from 'react';

export const center = (Story: any) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%', justifyContent: 'center', alignContent: 'center' }}>
    <Story />
  </div>
);
