import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { contactEmail } from '../funtions/contact/resource';

const schema = a.schema({
  sendContactEmail: a
    .query()
    .arguments({
      firstName: a.string().required(),
      lastName: a.string().required(),
      email: a.string().required(),
      message: a.string().required(),
    })
    .returns(
      a.customType({
        success: a.boolean(),
        message: a.string(),
      })
    )
    .handler(a.handler.function(contactEmail))
    .authorization(allow => [allow.publicApiKey(), allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  name: 'portfolio',
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
  },
});
