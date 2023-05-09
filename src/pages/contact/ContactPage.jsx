// import { useState } from "react";
// import * as api from "../../api";
import { useMakeContactMutation } from "../../store/apiSlice";

export function ContactPage() {
  const [makeContact, { isLoading, isSuccess }] = useMakeContactMutation();
  // const [wasSent, setWasSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    makeContact(Object.fromEntries(formData));
    form.reset();

    // show a short lived message
    // setWasSent(true);
    // setTimeout(() => {
    //   setWasSent(false);
    // }, 2000);
  };
  const disabled = isLoading || isSuccess;
  return (
    <div className="page">
      <h1>Contact</h1>
      <p className={`alert ${isSuccess ? "show" : ""}`}>
        <b>Message sent</b>
      </p>
      <p>
        Please send us a detailed message if you&apos;d like to get in touch to
        ask questions about any of our dog grooming services, or anything at
        all.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          required
          id="email"
          type="email"
          name="email"
          disabled={disabled}
          placeholder="youremail@youremail.com"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          disabled={disabled}
          placeholder="Please let us know what you want answered and we will try to help"
        />
        <div>
          <button type="submit" disabled={disabled}>
            Contact
          </button>
        </div>
      </form>
    </div>
  );
}
