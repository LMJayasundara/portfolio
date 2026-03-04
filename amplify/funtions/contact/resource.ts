import { defineFunction } from '@aws-amplify/backend';

export const contactEmail = defineFunction({
  name: 'contactEmail',
  entry: './handler.tsx',
  timeoutSeconds: 15,
  memoryMB: 256,
  resourceGroupName: 'data',
});
