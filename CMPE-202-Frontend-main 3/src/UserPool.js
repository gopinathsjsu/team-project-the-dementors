
 
 import {CognitoUserPool} from 'amazon-cognito-identity-js'
 const pool={
    UserPoolId:"us-east-1_T4BtjHYM9",
    ClientId:"5o7odcprhio7h2b8aieo8f0bk9"
}
export default new CognitoUserPool(pool);