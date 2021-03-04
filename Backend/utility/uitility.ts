export const EVENT_SOURCE = "Todo-app-events"
const AWS = require("aws-sdk");

const eventBridge = new AWS.EventBridge({ region: "eu-west-1" });
export const requestTemplate = (detail: string, detailType: string) => {

  return `
  {
    "version": "2018-05-29",
    "method": "POST",
    "resourcePath": "/",
    "params": {
      "headers": {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target":"AWSEvents.PutEvents"
      },
      "body": {
        "Entries":[
          {
            "Source":"todoApi",
            "EventBusName": "default",
            "Detail":${detail},
            "DetailType": ${detailType}
          }
        ]
      }
    }
  }
  
  `
}



export const responseTemplate = () => {

  return `
  #if($ctx.error)
  $util.error($ctx.error.message, $ctx.error.type)
#end
#if($ctx.result.statusCode == 200)
  {
    "result": "$util.parseJson($ctx.result.body)"
  }
#else
  $utils.appendError($ctx.result.body, $ctx.result.statusCode)
#end
  `
}

