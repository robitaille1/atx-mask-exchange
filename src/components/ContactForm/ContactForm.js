import React, { useState } from "react"
import emailjs from "emailjs-com"
import { Form, FormGroup, Label, Input } from "reactstrap"

export default function ContactUs() {
  const [values, setValues] = useState({
    from_name: "",
    contact_email: "",
    message_html: "",
  })

  const handleChange = name => e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const resetForm = () => {
    setValues({
      from_name: "",
      contact_email: "",
      message_html: "",
    })
  }

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "gmail",
        "template_IOEpgOb9",
        e.target,
        "user_geNX8Vvwl4xmoVyHFINWi"
      )
      .then(
        result => {
          alert("We received your message and will get in contact soon")
          console.log(result.text)
          resetForm()
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <Form
      style={{ marginTop: `30px` }}
      className="contact-form"
      onSubmit={sendEmail}
    >
      <FormGroup>
        <Label htmlFor="from_name">
          Name<span style={{ color: `red` }}>*</span>
        </Label>
        <Input
          type="text"
          name="from_name"
          required
          onChange={handleChange()}
          value={values.from_name}
        />
        <Label htmlFor="contact_email">
          Email<span style={{ color: `red` }}>*</span>
        </Label>
        <Input
          type="email"
          name="contact_email"
          required
          onChange={handleChange()}
          value={values.contact_email}
        />
        <Label htmlFor="message_html">
          Message<span style={{ color: `red` }}>*</span>
        </Label>
        <Input
          style={{ resize: `none`, height: `200px`, marginBottom: "30px" }}
          name="message_html"
          required
          onChange={handleChange()}
          value={values.message_html}
          type="textarea"
        />
        <Input
          type="submit"
          value="Send"
          style={{ background: `#1b3651`, color: `white` }}
        />
      </FormGroup>
    </Form>
  )
}
