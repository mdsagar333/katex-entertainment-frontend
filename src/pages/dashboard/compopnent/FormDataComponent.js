import React from "react";

const FormComponent = ({
  handler,
  fileType,
  isFileNeeded,
  isRequired,
  data,
}) => {
  console.log(fileType);
  return (
    <form className="container-fluid">
      <div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title..."
            name="title"
            required={isRequired}
            value={data.title}
            onChange={(e) => handler(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Descriptions..."
            name="description"
            required={isRequired}
            value={data.description}
            onChange={(e) => handler(e)}
          />
        </div>
        {isFileNeeded && (
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label text-capitalize"
            >
              Add {fileType}
              <br />
              <small>Please select file less than 50MB</small>
            </label>
            <input
              type="file"
              className="form-control"
              id="video"
              placeholder="Please select file less than 20MB"
              name={fileType}
              required={isRequired}
              onChange={(e) => handler(e)}
            />
          </div>
        )}
      </div>
    </form>
  );
};

export default FormComponent;
