import React from "react"

import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = ({ children, formName, ...props }) => {
  const [state, setState] = React.useState({ ...props })

  const params = new URLSearchParams(window.location.search)
  const urlFormName = params.get("formName")

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error))
  }

  return (
    <form
      name="contact"
      method="post"
      action="/contact/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}>
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value={formName || urlFormName || "contact"} />

      <div hidden>
        <label>
          Don’t fill this out: <input name="bot-field" onChange={handleChange} />
        </label>
      </div>
      <div className="field">
        <label className="label" htmlFor={"name"}>
          Nome
        </label>
        <div className="control">
          <input
            className="input"
            type={"text"}
            name={"name"}
            onChange={handleChange}
            id={"name"}
            required={true}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor={"email"}>
          Email
        </label>
        <div className="control">
          <input
            className="input"
            type={"email"}
            name={"email"}
            onChange={handleChange}
            id={"email"}
            required={true}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor={"message"}>
          Mensagem
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name={"message"}
            onChange={handleChange}
            id={"message"}
            required={true}
          />
        </div>
      </div>
      <div className="field">
        <button className="button" type="submit">
          Enviar
        </button>
      </div>
    </form>
  )
}

export { ContactForm }
