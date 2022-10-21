export const environment = {

  production: true,

  // TODO: make sure you have the correct region
  region: 'eu-west-1',


  // TODO: This id can be retrieved in output section of the cognito ui
  // cloud formation stack.
  cognitoIdentityPoolId: 'eu-west-1:633d54aa-365a-4e11-bb3b-4f9a0900b72f',

  // TODO: Facebook app id can be retrieved from the application in your
  // facebook developer account.
  facebookAppId: '1274398020060073',

  // TODO: The API URL is available in the API Gateway console under Stage
  // NOTE: don't forget trailing "/"  For example:
  // https://api.example.com/prod/
  ticketAPI: 'https://api.project-aws.com/'

};
