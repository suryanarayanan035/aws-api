const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    
    const {empid} = JSON.parse(event.body);
    
    const params = {
        TableName:"employee",
        Key:{
            empid:empid
        },
        
    };
    try {
        await documentClient.delete(params).promise();
        const response = {
            statusCode:200,
            body:JSON.stringify("Success")
        }
        return response;
    } catch (e) {
        const response = {
            statusCode:500,
            body:JSON.stringify("Item Not Deleted")
        }
        return response;
    }  
};
