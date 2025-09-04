export function Home(){
  return(
    <>
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <div
            id="hero-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval={5000}
          >
            <div className="carousel-item active">
              <img src="/assets/img/hero-carousel/hero-carousel-1.jpg" alt="" />
              <div className="carousel-container">
                <div>
                  <p>Doral, Florida</p>
                  <h2>
                    <span>204</span> Olive Road Two
                  </h2>
                  <a href="property-single.html" className="btn-get-started">
                    rent | $ 12.000
                  </a>
                </div>
              </div>
            </div>
            {/* End Carousel Item */}
            <div className="carousel-item">
              <img src="/assets/img/hero-carousel/hero-carousel-2.jpg" alt="" />
              <div className="carousel-container">
                <div>
                  <p>Doral, Florida</p>
                  <h2>
                    <span>247</span> Venda Road Five
                  </h2>
                  <a href="property-single.html" className="btn-get-started">
                    sale | $ 356.000
                  </a>
                </div>
              </div>
            </div>
            {/* End Carousel Item */}
            <div className="carousel-item">
              <img src="/assets/img/hero-carousel/hero-carousel-3.jpg" alt="" />
              <div className="carousel-container">
                <div>
                  <p>Doral, Florida</p>
                  <h2>
                    <span>247</span> Vitra Road three
                  </h2>
                  <a href="property-single.html" className="btn-get-started">
                    rent | $ 3.000
                  </a>
                </div>
              </div>
            </div>
            {/* End Carousel Item */}
            <a
              className="carousel-control-prev"
              href="#hero-carousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              />
            </a>
            <a
              className="carousel-control-next"
              href="#hero-carousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              />
            </a>
            <ol className="carousel-indicators" />
          </div>
        </section>
        {/* /Hero Section */}
        {/* Services Section */}

        <section id="services" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>
              At MapMyStay, We aim to bridge the gap between PG Owners and Tenants through a smart, easy-to-use, and reliable online platform.
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-item  position-relative">
                  <div className="icon">
                    <i className="bi bi-activity" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Verified PG Listings</h3>
                  </a>
                  <p>
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
                  <div className="icon">
                    <i className="bi bi-broadcast" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Online Booking & Secure Payments</h3>
                  </a>
                  <p>
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
                  <div className="icon">
                    <i className="bi bi-easel" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Personalized Booking Dashboard</h3>
                  </a>
                  <p>
                    UUsers get a personalized dashboard to manage their bookings, view payment history, check room availability, and keep track of stay details in one place.
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
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>PG Owner Property Management</h3>
                  </a>
                  <p>
                    PG owners have a dedicated portal where they can add or update PG listings, manage room availability, handle tenant bookings, and monitor payment statuses efficiently.
                  </p>
                  <a href="service-details.html" className="stretched-link" />
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Admin Control Panel</h3>
                  </a>
                  <p>
                    Admins can manage city-wise PG listings, oversee PG owner registrations, verify users, and ensure smooth platform operations with backend management tools.
                  </p>
                  <a href="service-details.html" className="stretched-link" />
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-square-text" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>24/7 Support Assistance</h3>
                  </a>
                  <p>
                    Our support team is always available to assist with queries related to bookings, technical support, and platform navigation.
                  </p>
                  <a href="service-details.html" className="stretched-link" />
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