const {v4:uuidv4} = require("uuid");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const ORDER_TABLE = "UserOrder-lro7seuoj5b25gcd7ipybqysim-dev";
const ORDER_TYPE = "Order";
const COURSE_ORDER_TABLE = "CourseOrder-lro7seuoj5b25gcd7ipybqysim-dev";
const COURSE_ORDER_TYPE = "CourseOrder";

const createOrder = async(payment) => {
    const {order_id, username,  email, total} = payment;
    var params = {
        TableName: ORDER_TABLE,
        Item:{
            id:order_id,
            __typename: ORDER_TYPE,
            customer: email,
            user: username,
            total: total,
            updatedAt: new Date().toISOString(),
            createdAt: new Date().toISOString()
        }
    };
    console.log(params);
    await documentClient.put(params).promise();
};

const createCourseOrder = async(payment) => {
    let courseOrders = [];
    for (i = 0; i < payment.cart.length; i++){
        const Itemincart = payment.cart[i];
        courseOrders.push({
            PutRequest: {
                Item: {
                    id: uuidv4(),
                    __typename: COURSE_ORDER_TYPE,
                    course_id: Itemincart.id,
                    order_id: payment.order_id,
                    customer: payment.email,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                }
            }
        });
    }
    let params = {
        RequestItems:{}
    };
    params["RequestItems"][COURSE_ORDER_TABLE] = courseOrders;
    console.log(params);
    await documentClient.batchWrite(params).promise();
};


/*
 * Get order details from payemntProcess lambda function
 * Create an order
 * Link videos to the order - Users can see the past orders and admins can view orders by user
 */

exports.handler = async(event) =>{
    try{
        //gives all the result from previous function - paymentProcess
        let payment = event.prev.result;
        payment.order_id = uuidv4();

        //create an order using DynamoDB SDK
        await createOrder(payment);

        //Link the videos purchased with this order - realtes to CourseOrder in schema
        await createCourseOrder(payment);

        return "SUCCESS";
    }catch(err){
        console.log(err);
        return new Error(err);
    }
};