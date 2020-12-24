import React from "react"

const UnsplashImage = ({ src, credit, className, children }) => {
  return (
    <div
      className={["unsplash-image margin-top-0", className].join(" ")}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: `center center`,
        backgroundAttachment: `initial`,
        backgroundSize: "cover",
        width: "100%",
        height: "300px",
      }}>
      {children}
      {credit && <Credit credit={credit} />}
    </div>
  )
}

const PageImage = ({ src, credit, className, children }) => {
  return (
    <div
      className={["page-image full-width-image unsplash-image margin-top-0", className].join(" ")}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: `center center`,
        backgroundAttachment: `initial`,
      }}>
      {children}
      {credit && <Credit credit={credit} />}
    </div>
  )
}

const Credit = ({ credit }) => (
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
)

export { UnsplashImage }
export default PageImage
