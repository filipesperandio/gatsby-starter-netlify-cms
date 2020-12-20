import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import research from "../img/research.svg"
import education from "../img/education.svg"
import health from "../img/health.svg"

const images = { research, education, health }

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => {
      console.log("item", images[item.image])
      return (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <img src={images[item.image]} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    )})}
  </div>
)

export default FeatureGrid
