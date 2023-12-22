import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({});

  let changeFormdata = ({ target: { name, value } }) => {
    setFormdata({ ...formdata, [name]: value });
  };

  let { username, email, subject, message } = formdata;

  let bdConnection = async () => {
    try {
      await axios.post("http://localhost:4000", {
        username,
        email,
        subject,
        message,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const SubmitFormData = (data) => {
    setError(validate(formdata));
    data.preventDefault();
    console.log(formdata);
    console.log(
      `Submitted form with values : ${formdata.username},${formdata.email},${formdata.subject},${formdata.message}`
    );
    bdConnection();
  };
  //! validating form data

  let validate = (fdata) => {
    let errorMessage = {};

    if (!fdata.username) {
      errorMessage.usernameMessage = "Error: Fullname is Mandatory";
      console.log(errorMessage);
    } else if (fdata.username.length < 6) {
      errorMessage.usernameMessage =
        "Error: Fullname should contain atleast 6 characters";
      console.log(errorMessage);
    }

    if (!fdata.email) {
      errorMessage.emailMessage = "Error: Email is Mandatory";
      console.log(errorMessage);
    }

    if (!fdata.subject) {
      errorMessage.subjectMessage = "Error: Subject is Mandatory";
      console.log(errorMessage);
    }

    if (!fdata.message) {
      errorMessage.messageMessage = "Error: Message is Mandatory";
      console.log(errorMessage);
    }

    return errorMessage;
  };

  return (
    <div className="items-center justify-between ml-[450px] mt-10 w-[600px] rounded-[10px] border p-10 ">
      <form onSubmit={SubmitFormData} method="post">
        <div>
          <h1 className="text-[white] flex justify-center text-2xl text-[gray-100]">
            Contact
          </h1>
        </div>

        <div>
          <label className="text-[white] ml-5">Name</label>
          <input
            className="p-3 m-3 flex w-[500px] rounded:md text-black rounded-lg outline-none"
            type="text"
            placeholder="Name"
            name="username"
            onChange={changeFormdata}
          />
          <small className="text-[red] ml-5">
            {error.usernameMessage && error.usernameMessage}
          </small>
        </div>

        <div>
          <label className="text-[white] ml-5">Email</label>
          <input
            className="p-3 m-3 flex w-[500px] rounded:md text-black rounded-lg outline-none"
            type="email"
            placeholder="Email"
            name="email"
            onChange={changeFormdata}
          />
          <small className="text-[red] ml-5">
            {error.emailMessage && error.emailMessage}
          </small>
        </div>

        <div>
          <label className="text-[white] ml-5">Subject</label>
          <input
            className="p-3 m-3 flex w-[500px] rounded:md text-black rounded-lg outline-none"
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={changeFormdata}
          />
          <small className="text-[red] ml-5">
            {error.subjectMessage && error.subjectMessage}
          </small>
        </div>

        <div>
          <label className="text-[white] ml-5">Message</label>
          <textarea
            className="p-3 m-3 flex w-[500px] rounded:md text-black rounded-lg outline-none"
            placeholder="How can we help you?"
            name="message"
            onChange={changeFormdata}
          />
          <small className="text-[red] ml-5">
            {error.messageMessage && error.messageMessage}
          </small>
        </div>

        <button
          type="submit"
          className="bg-[#00df9a] text-[black] w-[200px] rounded-md font-medium my-6 py-3 ml-40"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}
export default Contact;
