import { Inject, Injectable } from '@nestjs/common';
import supertokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import { ConfigInjectionToken, AuthModuleConfig } from '../config.interface';
import Dashboard from 'supertokens-node/recipe/dashboard';
import { ClientService } from '../../clients/services/client.service';

@Injectable()
export class SupertokensService {
  constructor(
    @Inject(ConfigInjectionToken) private config: AuthModuleConfig,
    private readonly clientService: ClientService,
  ) {
    supertokens.init({
      appInfo: config.appInfo,
      supertokens: {
        connectionURI: config.connectionURI,
        apiKey: config.apiKey,
      },
      recipeList: [
        EmailPassword.init({
          signUpFeature: {
            formFields: [
              {
                id: 'name',
              },
              {
                id: 'email',
              },
            ],
          },
          override: {
            apis: (originalImplementation) => {
              return {
                ...originalImplementation,
                signUpPOST: async function (input) {
                  if (originalImplementation.signUpPOST === undefined) {
                    throw Error('Should never come here');
                  }

                  const response = await originalImplementation.signUpPOST(
                    input,
                  );

                  if (response.status === 'OK') {
                    const formFields = input.formFields;
                    const name = formFields.filter(
                      (obj) => obj.id === 'name',
                    )[0];
                    const email = formFields.filter(
                      (obj) => obj.id === 'email',
                    )[0];
                    const userEntity = await clientService.createClient({
                      name: name.value,
                      email: email.value,
                      isAdmin: false,
                    });
                  }
                  return response;
                },
                signInPOST: async function (input) {
                  if (originalImplementation.signInPOST === undefined) {
                    throw Error('You can`t come here');
                  }

                  const response = await originalImplementation.signInPOST(
                    input,
                  );
                  return response;
                },
              };
            },
          },
        }),
        Session.init({ getTokenTransferMethod: () => 'cookie' }),
        Dashboard.init(),
      ],
    });
  }
}
