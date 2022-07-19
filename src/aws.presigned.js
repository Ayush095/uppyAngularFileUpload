// // Create service client module using ES6 syntax.
// import { S3Client } from "@aws-sdk/client-s3";

// // Import the required AWS SDK clients and commands for Node.js
// import {PutObjectCommand, }from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import fetch from "node-fetch";

// // Set the AWS Region.
// const REGION = "ap-southeast-1"; //e.g. "us-east-1"
// // Create an Amazon S3 service client object.
// const s3Client = new S3Client({ region: REGION });

  
//   // Set parameters
//   // Create a random name for the Amazon Simple Storage Service (Amazon S3) bucket and key
//   export const bucketParams = {
//     Bucket: `workspace-testing`,
//     Key: `batman.jpg`,
//     Body: "BODY"
//   };
//   export const run = async () => {
//     try {
//       // Create a command to put the object in the S3 bucket.
//       const command = new PutObjectCommand(bucketParams);
//       // Create the presigned URL.
//       const signedUrl = await getSignedUrl(s3Client, command, {
//         expiresIn: 36000,
//       });
//       console.log(
//         `\nPutting "${bucketParams.Key}" using signedUrl with body "${bucketParams.Body}" in v3`
//       );
//       console.log(signedUrl);
//       const response = await fetch(signedUrl, {method: 'PUT', body: bucketParams.Body});
//       console.log(
//         `\nResponse returned by signed URL: ${await response.text()}\n`
//       );
//     } catch (err) {
//       console.log("Error creating presigned URL", err);
//     }
//   };
//   run();
  
  