import React from "react";
import "./App.css";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_ACCESSKEYID,
  secretAccessKey: process.env.REACT_APP_SECRETACCESSKEY,
  region: process.env.REACT_APP_REGION
});

class S3Upload extends React.Component {
  state = { file: "" };

  imageUploadedHandler = e => {
    this.setState({
      file: e.target.files[0]
    });
  };

  upload = async e => {
    e.preventDefault();
    const params = {
      Bucket: "aws-denver-s3-upload",
      Key: `aws-denver-${this.state.file.lastModified}`,
      Body: this.state.file,
      ContentType: "image/jpeg"
    };
    await s3.upload(params, function(err, data) {
      console.log("data object", data);
    });
  };

  render() {
    return (
      <div className="App">
        <form
          className="col s12"
          onSubmit={this.onSubmit}
          encType="mulipart/form-data"
        >
          <div>
            <div>
              <input type="file" onChange={this.imageUploadedHandler} />
            </div>
          </div>

          <button type="submit" onClick={this.upload}>
            Create!
          </button>
        </form>
      </div>
    );
  }
}

export default S3Upload;
