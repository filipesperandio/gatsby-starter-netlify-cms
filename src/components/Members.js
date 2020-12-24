import React from "react"

import { Link } from "gatsby"

import { Social } from "./Icons"

const SocialPreset = {
  linkedin: {
    icon: Social.LinkedIn,
  },
  instagram: {
    icon: Social.Instagram,
  },
  twitter: {
    icon: Social.Twitter,
  },
}

const Members = ({ members }) => {
  return (
    <div>
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">Cooperação</h2>
      <p>
        Acreditamos fortemente na cooperação e que nossos objetivos só serão alcançados com a
        participação de muitos. Abaixo, aqueles e aquelas que, da sua forma, tem colaborado com a
        formação deste Instituto e a todos e todas, nosso muito obrigado!
      </p>
      <p>
        Deseja fazer parte desse trabalho? <Link to="/contact">Entra em contato com a gente.</Link>
      </p>
      {members.map((member) => (
        <Card member={member} />
      ))}
    </div>
  )
}

const Card = ({ member }) => (
  <div className="card" style={{ boxShadow: "none" }}>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <Avatar src={member.picture.childImageSharp.fluid.src} />
        </div>
        <div className="media-content">
          <p className="title is-4">{member.name}</p>
          <p className="subtitle is-6">{member.role}</p>
          {["linkedin", "twitter", "instagram"].map((social) => {
            const link = member[social]
            if (!link) {
              return null
            }

            const preset = SocialPreset[social]
            const Icon = preset.icon
            return (
              <a href={link} className="is-size-4 ml-2 dark" target="_blank">
                <Icon />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  </div>
)

const Avatar = ({ src }) => (
  <figure className="image is-128x128">
    <img className="is-rounded" src={src} />
  </figure>
)

export { Members }
