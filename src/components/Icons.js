import React from "react"

// https://fontawesome.com/icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
//import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Icon = (props) => <FontAwesomeIcon size="1x" {...props} icon={props.icon} />
const createFor = (icon) => (props) => <Icon {...props} icon={icon} />

const Envelope = createFor(faEnvelope)
const Marker = createFor(faMapMarkerAlt)

const LinkedIn = createFor(faLinkedin)
const Instagram = createFor(faInstagram)
const Twitter = createFor(faTwitter)

const Social = {
  LinkedIn: LinkedIn,
  Instagram: Instagram,
  Twitter: Twitter,
}

export { Envelope, Marker, Social }
