const {CognitoIdentityServiceProvider} = require("aws-sdk"); //this library is provided during lambda run-time
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "us-east-1_KBu1CSytF";
const stripe = require("stripe")("sk_test_51OqcS8CAxP2GngqxJ6mv4fjkcOKAubE6DhnEuOYZGqtKWQvWqmdwlfBMtAvOVYOSqTQustULc9NJ1ynx7JKxj32900P0zoEy7L");

/* For getting user email id for authenticating the payment process*/
const getUserEmail = async (event) => {
    const params = {
        UserPoolId: USER_POOL_ID,
        Username: event.identity.claims.username
    };
    const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
    const {Value:email} = user.UserAttributes.find((attr) => {
        if(attr.Name === "email"){
            return attr.Value;
        }
    });
    return email;
};

/*Getting the total price of the order and charging the user*/

exports.handler = async(event) => {
    try{
        const {id, cart, subtotal, address, token} = event.arguments.input;
        const {username} = event.identity.claims;
        const email = await getUserEmail(event);

        await stripe.charges.create({
            amount: subtotal * 100,
            currency: "cad",
            source: token,
            description: `Order ${new Date()} by ${username} with ${email} email`
        });
        return {id, cart, subtotal, address, username, email};
    }catch(err){
        throw new Error(err);
    }
};