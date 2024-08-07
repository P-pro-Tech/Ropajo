/** @format */

import React from "react";
import "./CreateStaff.css";
import DashBoardHeader from "../../DashBoardHeader/DashBoardHeader";
import DashboardRoomProfile from "../../DashboardRoomProfile/DashboardRoomProfile";
import { useState } from "react";
import { generateUniqueNumbers } from "../../../utils/generateId";
import { useAddStaffMutation } from "../../../hooks/staff";
import { convertToBase64 } from "../../../utils/convertImg";
import toast from "react-hot-toast";

const CreateStaff = () => {
  const [profileShow, setProfileShow] = useState(false);
  const { mutateAsync: addStaff, isPending, error } = useAddStaffMutation();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idPhoto, setIdPhoto] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [photo, setPhoto] = useState("");
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState("");
  const [qualification, setQualification] = useState("");
  const unique = generateUniqueNumbers(1, 6)[0];
  const staffUniqueId = `RPJ${unique}`;

  const uploadIdPhoto = async (e) => {
    const target = e.target;
    const { files } = target;
    const file = files[0];
    try {
      const base64 = await convertToBase64(file);
      setIdPhoto(base64);
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  };
  const uploadPhoto = async (e) => {
    const target = e.target;
    const { files } = target;
    const file = files[0];
    try {
      const base64 = await convertToBase64(file);
      setPhoto(base64);
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStaff({
        fullName,
        email,
        position,
        address,
        qualification,
        phoneNumber,
        dateOfBirth,
        photo,
        idPhoto,
        staffUniqueId,
      });
      toast.success("staff added succefully");
    } catch (error) {
      toast.error("Faild");
    }
  };
  return (
    <div className='CreateStaff'>
      <div className='CreateStaff-hue'>
        <div>
          <DashboardRoomProfile
            profileShow={profileShow}
            setProfileShow={setProfileShow}
          />
          <DashBoardHeader setProfileShow={setProfileShow} />
        </div>

        <div className='CreateStaff-body'>
          <form onSubmit={handleSubmit} className='CreateStaff-form'>
            <h1>Create Staff</h1>
            <label htmlFor=''>

              Name:
              <input
                type='text'
                onChange={(e) => setFullName(e.target.value)}
                id=''
                placeholder=''
              />
            </label>
            <label htmlFor=''>
              Address:
              <input
                type='text'
                onChange={(e) => setAddress(e.target.value)}
                id=''
                placeholder=''
              />
            </label>
            <label htmlFor=''>
              Email:
              <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                id=''
                placeholder=''
              />
            </label>
            <label htmlFor=''>
              Contact:
              <input
                type='number'
                onChange={(e) => setPhoneNumber(e.target.value)}
                id=''
                placeholder=''
              />
            </label>

            <section className="seprate" htmlFor="">
              <label htmlFor="">
                D.O.B:
                <input
                  type="text"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  name=""
                  id=""
                  placeholder=""
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
              </label>
              <label htmlFor="">
                Gender:
                <select name="Gender" id="Gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
            </section>
            <label htmlFor="">
{/* >>>>>>> Stashed changes */}
              Qualification:
              <input
                type='text'
                onChange={(e) => setQualification(e.target.value)}
                id=''
                placeholder=''
              />
            </label>


            <section htmlFor="" className="seprate">
              <label htmlFor="">
                Position:
                <select name="" id="" onChange={(e) => setPosition(e.target.value)}>
                  <option value="Manager">Manager</option>
                  <option value="Bartender">Bartender</option>
                  <option value="Receptionist">Receptionist</option>
                  <option value="Waiter">Waiter</option>
                  <option value="Cashier">Cashier</option>
                  <option value="House keeper">House keeper</option>
                  <option value="Security">Security</option>
                  <option value="Technician">Technician</option>
                  <option value="Cook">Cook</option>
                  <option value="Others">Others</option>
                </select>
              </label>

              <label htmlFor="">
                Salary:
                <input type="text" name="" id="" placeholder="" />
              </label>
            </section>

            <label className='seprate'>
              Upload Photo:
              <input
                type='file'
                onChange={(e) => uploadPhoto(e)}
                id='upload-photo'
                placeholder='Upload Photo:'
                hidden
              />
              <span htmlFor='upload-photo' className='CreateStaff-file-label'>
                upload
              </span>
            </label>
            <label className='seprate'>
              Upload ID:
              <input
                type='file'
                onChange={(e) => uploadIdPhoto(e)}
                id='upload-id'
                placeholder='Upload ID:'
                hidden
              />
              <span htmlFor='upload-id' className='CreateStaff-file-label'>
                upload
              </span>
            </label>

            <button
              style={{ cursor: "pointer" }}
              type='submit'
              className='CreateStaff-submit'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStaff;
