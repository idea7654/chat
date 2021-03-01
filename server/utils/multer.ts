import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
AWS.config.loadFromPath(__dirname + "/../config/awsconfig.json");
const s3 = new AWS.S3();

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "chatmern/image",
    acl: "public-read",
  }),
});

export default upload;
