import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { contactEmail } from './funtions/contact/resource';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';

const backend = defineBackend({
  auth,
  data,
  contactEmail,
});

const contactLambda = backend.contactEmail.resources.lambda;

contactLambda.addToRolePolicy(
  new PolicyStatement({
    sid: 'SESSendEmail',
    effect: Effect.ALLOW,
    actions: ['ses:SendEmail', 'ses:SendRawEmail'],
    resources: ['*'],
  })
);
