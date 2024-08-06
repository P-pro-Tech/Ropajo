import React from "react";
import "./CreateStaff.css";
import DashBoardHeader from "../../DashBoardHeader/DashBoardHeader";
import DashboardRoomProfile from "../../DashboardRoomProfile/DashboardRoomProfile";
import { useState } from "react";

const CreateStaff = () => {
  const [profileShow, setProfileShow] = useState(false);
  return (
    <div className="CreateStaff">
      <div className="CreateStaff-hue">
        <div>
          <DashboardRoomProfile
            profileShow={profileShow}
            setProfileShow={setProfileShow}
          />
          <DashBoardHeader setProfileShow={setProfileShow} />
        </div>
        <div className="CreateStaff-body">
          <form className="CreateStaff-form">
            <h1>Register</h1>
            <label htmlFor="">
              Name:
              <input type="text" name="" id="" placeholder="" />
            </label>
            <label htmlFor="">
              Address:
              <input type="text" name="" id="" placeholder="" />
            </label>
            <label htmlFor="">
              Email:
              <input type="email" name="" id="" placeholder="" />
            </label>
            <label htmlFor="">
              Contact:
              <input type="number" name="" id="" placeholder="" />
            </label>
            <label htmlFor="">
              D.O.B:
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </label>
            <label htmlFor="">
              Qualification:
              <input type="text" name="" id="" placeholder="" />
            </label>
            <label htmlFor="">
              Position:
              <input type="text" name="" id="" placeholder="" />
            </label>

            <label className="seprate">
              Upload Photo:
              <input
                type="file"
                name=""
                id="upload-photo"
                placeholder="Upload Photo:"
                hidden
              />
              <span htmlFor="upload-photo" className="CreateStaff-file-label">
                upload
              </span>
            </label>
            <label className="seprate">
              Upload ID:
              <input
                type="file"
                name=""
                id="upload-id"
                placeholder="Upload ID:"
                hidden
              />
              <span htmlFor="upload-id" className="CreateStaff-file-label">
                upload
              </span>
            </label>

            <button type="submit" className="CreateStaff-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStaff;
