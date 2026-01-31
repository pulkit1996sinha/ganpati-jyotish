import { useState } from "react";
import { api } from "../api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const submit = async () => {
    await api.post("/contact", form);
    alert("Request submitted successfully");
  };

  return (
    <div>
      <input
        placeholder="Name"
        onChange={e => setForm({...form, name: e.target.value})}
      />
      <input
        placeholder="Phone"
        onChange={e => setForm({...form, phone: e.target.value})}
      />
      <textarea
        placeholder="Message"
        onChange={e => setForm({...form, message: e.target.value})}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
