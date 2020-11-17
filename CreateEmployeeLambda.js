const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    
    const {empid,name,role} = JSON.parse(event.body)
    
    const params = {TableName:"employees",
        Item:{
            empid:empid,
            name:name,
            role:role
        }
    };
    try {
        
    await documentClient.put(params).promise();
    const response = {
        statusCode: 200,
        body: "Data inserted successfully",
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
