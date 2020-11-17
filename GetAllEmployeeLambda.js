const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    try {
        const params = {TableName:"employees"};
    const data = await documentClient.scan(params).promise();
    const response = {
        statusCode: 200,
        body: JSON.stringify(data.Items),
    };
    return response;
    } catch (e) {
        
        const response = {
        statusCode: 500,
        body: JSON.stringify(e),
    };
    return response;
        
    }
    
};
