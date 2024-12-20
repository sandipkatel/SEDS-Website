
import styles from "@/styles/Organisms/footer.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg";
import { Facebook, Instagram, LinkedIn, Discord } from "@/components/Molecules/icons";

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <div className={styles.footer_upper}>
          <Link href="/" className={styles.logo_wrapper}>
            <Image alt="Logo" className={styles.logo_image} src={logo} />
            <div className={styles.logo_text}>
              SEDS-
              <span className="gradient_text">Pulchowk</span>
            </div>
          </Link>
          <div className={styles.contact}>
            <div>
              <span className={styles.contact_link}>
                <Link
                  href="https://www.google.com/maps/place/Center+for+Energy+Studies/@27.6824252,85.3202171,418m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39eb19cbf6b89eb7:0x951b3c8ac733e3ec!2sInstitute+of+Engineering,+Pulchowk+Campus!8m2!3d27.6812752!4d85.3172175!16s%2Fg%2F11c494jtbg!3m5!1s0x39eb19b647ec4263:0x33745c3bb36f27f!8m2!3d27.6831632!4d85.3208455!16s%2Fg%2F1hf0ywzs_?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  Pulchowk Engineering Campus, IOE, Lalitpur, Nepal
                </Link>
              </span>
            </div>
            <div>
              Email: &nbsp;
              <span className={styles.contact_link}>
                <Link href="mailto:seds@pcampus.edu.np" target="_blank">
                  seds@pcampus.edu.np
                </Link>
              </span>
            </div>
            <div>
              Contact: &nbsp;
              <span className={styles.contact_link}>
                <Link href="tel:9817899305" target="_blank">
                  9817899305
                </Link>
              </span>
              , &nbsp;
              <span className={styles.contact_link}>
                <Link href="tel:9762786755" target="_blank">
                  9762786755
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.footer_lower}>
          <div className={styles.socials}>
            <Link href="https://www.facebook.com/profile.php?id=100094240345334">
              <div className={styles.socials_item}>
                <span className={styles.social_icon}>
                  <Facebook />
                </span>
                <p>Facebook</p>
              </div>
            </Link>
            <Link href="https://www.instagram.com/sedspulchowk/">
              <div className={styles.socials_item}>
                <span className={styles.social_icon}>
                  <Instagram />
                </span>
                <p>Instagram</p>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/company/seds-pulchowk/">
              <div className={styles.socials_item}>
                <span className={styles.social_icon}>
                  <LinkedIn />
                </span>
                <p>LinkedIn</p>
              </div>
            </Link>
            <Link href="https://discord.gg/gtfaf7Q4NB">
              <div className={styles.socials_item}>
                <span className={styles.social_icon}>
                  <Discord />
                </span>
                <p>Discord</p>
              </div>
            </Link>
          </div>
        </div>
      </footer>
  );
}
