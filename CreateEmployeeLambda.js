const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // TODO implement
    
    const {empid,name,salary} = JSON.parse(event.body);
    const params = {
        TableName:"employee",
        Item:{
            empid:empid,
            name:name,
            salary:salary
        }
    };
    try {
        await documentClient.put(params).promise();
        const response = {
            statusCode: 200,
            body: JSON.stringify('Data saved successfully')
            
        }
        ;
        return response;
    } catch (e) {
        const response = {
            statusCode: 200,
            body: JSON.stringify('Data not saved')
            
        };
        
        return response;
    }
  
  
};
