import React from "react"

const PageImage = ({ src, credit, children }) => {
  return (
    <div
      className="unsplash-image page-image full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: `center center`,
        backgroundAttachment: `initial`,
      }}>
      {children}
      {credit && (
        <div className="credit">
          <span>
            Photo by{" "}
            <a href={credit.href} target="_blank">
              {credit.author}
            </a>
            {" on "}
            <a href="https://unsplash.com" target="_blank">
              Unsplash
            </a>
          </span>
        </div>
      )}
    </div>
  )
}

export default PageImage
