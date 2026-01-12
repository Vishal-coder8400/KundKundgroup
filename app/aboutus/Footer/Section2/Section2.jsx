import React from "react";
import styles from "./Section2.module.css";
import Link from "next/link";

const Section2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.top}>
            <h3>KundKund Group</h3>
            <p>
              Your trusted partner in Stock Market Training, Digital Marketing,
              Import & Export, Healthcare, and Education.
            </p>
            <p>More about us ⬤ </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.socials}>
              <p>
                <Link href={"https://www.linkedin.com/company/kundkund-group"}>
                  <img src={"./icons/icons8-linkedin.svg"} alt="" />
                </Link>
              </p>
              <p>
                <Link href={"https://www.facebook.com/kundkundgroup"}>
                  <img src={"./icons/social3.svg"} alt="" />
                </Link>
              </p>
              <p>
                <Link href={"https://www.instagram.com/kundkund_group/"}>
                  <img src={"./icons/social5.svg"} alt="" />
                </Link>
              </p>
              <p>
                <Link href={"https://x.com/KundkundGroup"}>
                  <img src={"./icons/twitter.png"} alt="" />
                </Link>
              </p>
            </div>
            <p>
              © 2025 — Copyright <br /> All Rights reserved
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div></div>
          <div className={styles.bottom}>
            <div>
              <div className={styles.set}>
                <h3>Contact Us</h3>
                <p>+91 73032 28181</p>
                <p>info@kundkundgroup.com</p>
              </div>
              <div className={styles.bottomflex}>
                <div className={styles.set}>
                  <h3>Location</h3>
                  <p>
                    H-166, Sector 63 Rd, H Block, Sector 63,
                    <br /> Noida, Uttar Pradesh 201301
                  </p>
                </div>

                {/* Subsidiaries Section */}
                <div className={styles.subsidiaries}>
                  <h3>Subsidiaries</h3>
                  <div>
                    <p>
                      <Link href="https://collegele.com/">CollegeLe</Link>
                    </p>
                    <p>
                      <Link href="https://mediend.com/">MediEND</Link>
                    </p>
                    <p>
                      <Link href="#">KundkundTC</Link>
                    </p>
                    <p>
                      <Link href="https://kundkundit.com">KundkundIT</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialMobile}>
        <div className={styles.socials}>
          <p>
            <Link href={"https://www.linkedin.com/company/kundkund-group"}>
              <img src={"./icons/icons8-linkedin.svg"} alt="" />
            </Link>
          </p>
          <p>
            <Link href={"https://www.facebook.com/kundkundgroup"}>
              <img src={"./icons/social3.svg"} alt="" />
            </Link>
          </p>
          <p>
            <Link href={"https://www.instagram.com/kundkund_group/"}>
              <img src={"./icons/social5.svg"} alt="" />
            </Link>
          </p>
          <p>
            <Link href={"https://x.com/KundkundGroup"}>
              <img src={"./icons/twitter.png"} alt="" />
            </Link>
          </p>
        </div>
        <p>
          © 2025 — Copyright <br /> All Rights reserved
        </p>
      </div>
    </div>
  );
};

export default Section2;
