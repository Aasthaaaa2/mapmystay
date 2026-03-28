import { Link } from "react-router-dom";

export function About(){
return(
<>
  <main className="main">
    {/* Page Title */}
    <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')",height:"450px"}}>
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="text-light" style={{marginTop:70}}>About</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Page Title */}
    {/* About Section */}
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <p className="who-we-are">Who We Are</p>
            <h3>Unleashing Potential with Creative Strategy</h3>
            <p className="fst-italic">
              At MapMyStay, we are a team of technology enthusiasts and domain experts dedicated to transforming the traditional PG accommodation process. We aim to bridge the gap between PG Owners and Tenants through a smart, easy-to-use, and reliable online platform.
            </p>
            <p>Our Goal is to offer:</p>
            <ul>
              <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    A centralized system for managing PG listings.
                  </span>
              </li>
              <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    A smooth and quick search & booking experience for users.
                  </span>
              </li>
              <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Efficient tools for PG owners to handle rooms and bookings.
                  </span>
              </li>
              <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Administrative control to ensure data integrity and platform security.
                  </span>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-6 about-images"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="row gy-4">
              <div className="col-lg-6">
                <img
                  src="/assets/img/about-company-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-lg-12">
                    <img
                      src="/assets/img/about-company-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-12">
                    <img
                      src="/assets/img/about-company-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
    {/* /About Section */}
    {/* Stats Section */}
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-emoji-smile color-blue flex-shrink-0" />
              <div>
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={232}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-journal-richtext color-orange flex-shrink-0" />
              <div>
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={521}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Projects</p>
              </div>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-headset color-green flex-shrink-0" />
              <div>
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1463}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Hours Of Support</p>
              </div>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-people color-pink flex-shrink-0" />
              <div>
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={15}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
          {/* End Stats Item */}
        </div>
      </div>
    </section>
    {/* /Stats Section */}
    {/* Features Section */}
    <section id="features" className="features section">
      <div className="container">
        <div className="row justify-content-around gy-4">
          <div
            className="features-image col-lg-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <img src="/assets/img/features-bg.jpg" alt="" />
          </div>
          <div
            className="col-lg-5 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <h3>Easily search, Book & Manage PG Stays</h3>
            <p>
              Discover a wide range of Paying Guest(PG) accomodations across cities with ease.
            </p>
            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <i className="bi bi-easel flex-shrink-0" />
              <div>
                <h4>
                  <Link to="/about">
                    Explore PG Listings
                  </Link>
                </h4>
                <p>
                  Find verified PGs in your city with accurate details and real images.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <i className="bi bi-patch-check flex-shrink-0" />
              <div>
                <h4>
                  <Link to="/about">
                    Seamless Booking experience
                  </Link>
                </h4>
                <p>
                  Instant online bookings with transparent pricing and payment options.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <i className="bi bi-brightness-high flex-shrink-0" />
              <div>
                <h4>
                  <Link to="/about">
                    Manage your Bookings
                  </Link>
                </h4>
                <p>
                  Track booking status, room availability, and payments on your dashboard.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <i className="bi bi-brightness-high flex-shrink-0" />
              <div>
                <h4>
                  <Link to="/about">
                    PG Owner Dashboard
                  </Link>
                </h4>
                <p>
                  Efficient tools for owners to manage room listings, bookings, and updates.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
          </div>
        </div>
      </div>
    </section>
    {/* /Features Section */}
  </main>
  {/* Scroll Top */}
  <a
    href="#"
    id="scroll-top"
    className="scroll-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
</>
)
}

