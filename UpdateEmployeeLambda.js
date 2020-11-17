exports.handler = async (event) => {
    const AWS = require("aws-sdk");
    const documentClient = new AWS.DynamoDB.DocumentClient();
    const {empid,name,role} = JSON.parse(event.body)
    
    const params = {
        TableName:"employees",
        Key:{
            "name":name,
            "role":role,
            
        },
        UpdateExpression: "set name=:name role=:role",
        ConditionExpression:"empid == :empid",
        ExpressionAttributeValues:{
            ":name":name,
            ":role":role,
            ":empid":empid
        },
        ReturnValues:"UPDATED_NEW"
        
    };
    
    try {
        const returnData = documentClient.update(params).promise();
        const response = {
        statusCode: 200,
        body: JSON.stringify(returnData),
    };
    return response;
    } 
    catch (e) {
        const response = {
        statusCode: 500,
        body: JSON.stringify("some error occured"),
    };
    return response;
    }
    
    
};
