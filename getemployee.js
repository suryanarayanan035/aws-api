const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log(event);
    const empid = event.pathParameters.id;
    var employee=null;
    
    const params = {
        TableName:"employee",
        Key:{
            empid:parseInt(empid)
        },
        
    };
    try {
        employee=await documentClient.get(params).promise();
                const response = {
            statusCode:200,
            body:JSON.stringify(employee.Item)
        };
        return response;
    } catch (e) {
        const response = {
            statusCode:500,
            body:JSON.stringify("Unable to retrieve specified resource\nError:"+e)
        };
        return response;
    }
    
    
    
    
    
    
};