import { Link } from "react-router-dom";

export function Services(){
  return(
    <>
      <main className="main">
        {/* Page Title */}
        <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-3.jpg')",height:"450px"}}>
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="text-light" style={{marginTop:70}}>Services</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title */}
        {/* Services Section */}
        <section id="services" className="services section">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-item  position-relative">
                  <Link to="/services">
                  <div className="icon">
                    <i className="bi bi-activity" />
                  </div>
                    <h3>Verified PG Listings</h3>
                  </Link>
                  <p className="fs-6">
                    Access a curated collection of PG accommodations with detailed property descriptions, real images, amenities, and verified information to ensure trust and transparency.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-item position-relative">
                  <Link to="/services">
                  <div className="icon">
                    <i className="bi bi-broadcast" />
                  </div>
                    <h3>Online Booking & Secure Payments</h3>
                  </Link>
                  <p className="fs-6">
                    Enjoy a fast and safe booking process through our platform with real-time availability checks and secure payment gateways ensuring smooth transactions.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-item position-relative">
                  <Link to="/services" >
                  <div className="icon">
                    <i className="bi bi-easel" />
                  </div>
                    <h3>Personalized Booking Dashboard</h3>
                  </Link>
                  <p className="fs-6">
                    Users get a personalized dashboard to manage their bookings, view payment history, check room availability, and keep track of stay details in one place.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="service-item position-relative">
                  <Link to="/services" >
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles" />
                  </div>
                    <h3>PG Owner Property Management</h3>
                  </Link>
                  <p className="fs-6">
                    PG owners have a dedicated portal where they can add or update PG listings, manage room availability, handle tenant bookings, and monitor payment statuses efficiently.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="service-item position-relative">
                  <Link to="/services" >
                  <div className="icon">
                    <i className="bi bi-calendar4-week" />
                  </div>
                    <h3>Admin Control Panel</h3>
                  </Link>
                  <p className="fs-6">
                    Admins can manage city-wise PG listings, oversee PG owner registrations, verify users, and ensure smooth platform operations with backend management tools.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="service-item position-relative">
                  <Link to="/services" >
                  <div className="icon">
                    <i className="bi bi-chat-square-text" />
                  </div>
                    <h3>24/7 Support Assistance</h3>
                  </Link>
                  <p className="fs-6">
                    Our support team is always available to assist with queries related to bookings, technical support, and platform navigation.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* /Services Section */}
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