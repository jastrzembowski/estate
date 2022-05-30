import React from 'react'

export default function About() {
  return (
      <>
    <section className="about">
    <div className="about-us flex">
      <p className="founder">
        Jose Kusuma
        <span className="position">Founder Serumah</span>
      </p>
      <div className="quote">
      <i className="fa-solid fa-quote-left" style={{fontSize: "80px", color: "white", opacity: "0.25"}}></i>
        <p>
          Our business is one of close relationships and we are very fortunate
          to be able to share so many positibe real estate experiences with out
          clients.
        </p>
      </div>
    </div>
    <div className="clients flex">
      <img
        src="https://wetog.pl/wp-content/uploads/2021/07/LOGO_starter-1.png"
        alt="client-logo"
      />
      <img
        src="https://wetog.pl/wp-content/uploads/2021/08/HelpNGO-logo.png"
        alt="client-logo"
      />
      <img
        src="https://wetog.pl/wp-content/uploads/2021/07/LOGO_voicelab.png"
        alt="client-logo"
      />
      <img
        src="https://wetog.pl/wp-content/uploads/2021/11/simulo-logo-1.png"
        alt="client-logo"
      />
    </div>
  </section>

  <section className="our-services">
    <div className="our-service__image flex">
      <img
        className="img-1"
        src="https://firebasestorage.googleapis.com/v0/b/real-estate-963b8.appspot.com/o/properties%2Fdom_dziurawy_81.waw_.pl_011.jpg?alt=media&token=4d393865-db24-4e3f-a5b8-a366a57c6d8b"
        alt="house"
      />
      <img
        className="img-2"
        src="https://firebasestorage.googleapis.com/v0/b/real-estate-963b8.appspot.com/o/properties%2Fdownload.jpeg?alt=media&token=6c242452-60d4-43a0-b551-2c16549a8b3f"
        alt="house"
      />
    </div>
    <div className="our-service__body">
      <p className="heading-label">Our Service</p>
      <h3 className="sub-heading">Comfort is our Top Priotity for you</h3>
      <p className="service__body-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error in
        expedita labore animi, consectetur repellendus quia.
      </p>
      <div className="services">
        <div>
          <p className="list-item">Premium national marketing</p>
          <p className="list-item">Managed viewings</p>
        </div>
        <div>
          <p className="list-item">Free, no obligation valuations</p>
          <p className="list-item">Local area knowledge</p>
        </div>
      </div>
      <button className="btn">See More</button>
    </div>
  </section>
  </>
  )
}
