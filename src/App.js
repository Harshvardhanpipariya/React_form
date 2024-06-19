import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India",
    streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false, pushNotifications: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
    <div className="w-full  flex flex-col items-center mt-2">
      <form onSubmit={submitHandler} className="m flex flex-col items-center  ">

        
        <div className=" w-[46.9vw]  ">
        <label htmlFor="firstName" className="mx-2">First name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Harshvardhan"
          value={formData.firstName}
          onChange={changeHandler}
          className="block w-[50%] rounded-md border-0 py-1.5 pl-7 mt-3
           text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6"
        />

        <br />
        <label htmlFor="lastName" className="mx-2 ">Last name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Pipariya"
          value={formData.lastName}
          onChange={changeHandler}
          className="block w-[50%] rounded-md border-0 py-1.5 pl-7 pr-20 mt-3
           text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6"
        />

        <br />
        <label htmlFor="email" className="mx-2">Email Address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="harshvardhan@abcd.com"
          value={formData.email}
          onChange={changeHandler}
          className="block w-[60%] rounded-md border-0 py-1.5 pl-7 pr-20 mt-3
           text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6"
        />

        <br />
        <label htmlFor="country" className="mx-2">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="block w-[40%] rounded-md border-0 py-1.5 pl-7 pr-20 mt-3
           text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6"
        >

          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />
        <label htmlFor="streetAddress" className="mx-2">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="block w-[50%] rounded-md border-0 py-1.5 pl-7 pr-20 mt-3
           text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6"
        />

        <br />
        <label htmlFor="city" className="mx-2">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="B-25C"
          value={formData.city}
          onChange={changeHandler}
          className="block w-[45%] rounded-md border-0 py-1.5 pl-7 pr-20 mt-3
           text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6"
        />

        <br />
        <label htmlFor="state" className="mx-2">State / Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={changeHandler}
          className="block w-[30%] rounded-md border-0 py-1.5 pl-7 pr-20 mt-3
           text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6"
        />

        <br />
        <label htmlFor="postalCode" className="mx-2">Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110077"
          value={formData.postalCode}
          onChange={changeHandler}
          className="block w-[20%] rounded-md border-0 py-1.5 pl-7 pr-20 mt-3
           text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6"
        />
        </div>

        <br />
        <br />
        <fieldset className=" w-[46.9vw] h-[35vh] flex flex-col justify-center items-start gap-5 my-5">
          <legend className=" text-lg p-10">By Email</legend>

          <div className="flex justify-center items-center">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              className="mt-7 mr-3"

            />
            <div className="flex flex-col justify-center items-start">
              <label htmlFor="comments" className="mx-3 font-semibold">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
              className="mt-7 mr-3"
            />
            <div className="flex flex-col justify-center items-start">
              <label htmlFor="candidates" className="mx-3 font-semibold">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              className="mt-7 mr-3"
            />
            <div className="flex flex-col justify-center items-start">
              <label htmlFor="offers" className="mx-3 font-semibold">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.

              </p>
            </div>
          </div>




        </fieldset>

        <br />
        <br />
       
        <fieldset className=" w-[46.9vw] h-[35vh] flex flex-col justify-center items-start gap-5 my-10">
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <div className="flex justify-center items-center">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="Everything"
              onChange={changeHandler}

            />
            <label htmlFor="pushEverything" className="mx-2">Everything</label>
          </div>


          <div className="flex justify-center items-center">
       
            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={changeHandler}
            />

            <label htmlFor="pushEmail" className="mx-2">Same as email</label>
          </div>



          <div  className="flex justify-center items-center">
            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No Push Notifications"
              onChange={changeHandler}
            />

            <label htmlFor="pushNothing" className="mx-2">No Push Notifications</label>
          </div>


        </fieldset>


        <br />
        <br />
        <button
          className="bg-blue-500 text-white font-bold rounded -mt-[15%] py-2 px-4"
        >Save</button>






      </form>

    </div>
  );
}

export default App;
