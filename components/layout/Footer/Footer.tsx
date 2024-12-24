"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer
      className={`text-center text-lg-start text-white ${styles.footer}`}
      data-section="contact"
    >
      {/* Grid container */}
      <div className={`container ${styles.container}`}>
        {/* Section: Links */}
        <section className="">
          {/* Grid row */}
          <div className="row text-center text-md-start">
            {/* Grid column */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6
                className={`text-uppercase mb-2 mb-md-4 font-weight-bold ${styles.heading}`}
              >
                Andrew Chang
              </h6>
              <p className={styles.text}>
                I sometimes like doing projects and sometimes don&apos;t.
              </p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6
                className={`text-uppercase mb-2 mb-md-4 font-weight-bold ${styles.heading}`}
              >
                Contact
              </h6>
              <p className={styles.text}>
                <i className="fas fa-home me-2"></i>Los Angeles, CA
              </p>
              <p className={styles.text}>
                <i className="fas fa-envelope me-2"></i>changa17@uci.edu
              </p>
              <p className={styles.text}>
                <i className="fas fa-phone me-2"></i>+1 (626)-251-8717
              </p>
            </div>
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6
                className={`text-uppercase mb-2 mb-md-4 font-weight-bold ${styles.heading}`}
              >
                Follow me
              </h6>
              <div className={styles.socialBtnContainer}>
                {/* LinkedIn Button */}
                <a
                  className={`btn btn-primary btn-floating m-1 ${styles.socialBtn}`}
                  style={{ backgroundColor: "#0082ca" }}
                  href="https://www.linkedin.com/in/itsmandrew/"
                  role="button"
                  title="linkedin button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                {/* Github Button */}
                <a
                  className={`btn btn-primary btn-floating m-1 ${styles.socialBtn}`}
                  style={{ backgroundColor: "#333333" }}
                  href="https://github.com/itsmandrew"
                  role="button"
                  title="github button"
                >
                  <i className="fab fa-github"></i>
                </a>
                {/* Instagram Button */}
                <a
                  className={`btn btn-primary btn-floating m-1 ${styles.socialBtn}`}
                  href="https://www.instagram.com/itsmandrew/?hl=en"
                  role="button"
                  title="instagram button"
                  style={{
                    backgroundImage:
                      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                {/* Spotify Button */}
                <a
                  className={`btn btn-primary btn-floating m-1 ${styles.socialBtn}`}
                  style={{ backgroundColor: "#1db954" }}
                  href="https://open.spotify.com/user/31xdfygnauxezih3fr7e4q5wbsku?si=bb2e1b277a4448ba"
                  role="button"
                  title="spotify button"
                >
                  <i className="fab fa-spotify"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Copyright */}
      <div className={`text-center p-3 ${styles.copyright}`}>
        © 2024 Copyright: Andrew Chang
      </div>
    </footer>
  );
}
