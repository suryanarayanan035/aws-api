const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // TODO implement
    
    const {empid,name,salary} = JSON.parse(event.body);
    const params = {
        TableName:"employee",
        Key:{
            empid: empid
        },
        UpdateExpression:"set salary=:salary,#n=:name",
        ConditionExpression:"empid = :empid",
        ExpressionAttributeNames:{
                '#n': "name"
            },
         ExpressionAttributeValues:{
        ":name": name,
        ":empid": empid,
        ":salary": salary,
    },
    ReturnValues:"UPDATED_NEW"
    };
    try {
        await documentClient.update(params,function(err,data)
        {
            if(err!=null){console.log("Error Occured");}
            else {console.log("Data updation Successfull")}
        }).promise();
        const response = {
            statusCode: 200,
            body: JSON.stringify('Data saved successfully')
            
        }
        ;
        return response;
    } catch (e) {
        const response = {
            statusCode: 500,
            body: JSON.stringify('Data not saved'+e)
            
        };
        
        return response;
    }
  
  
};
