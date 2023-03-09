import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.contentBox}>
        <div className={styles.aboutTextbox}>
          <h2>
            <ul>
              <li className={styles.sectionTitle}>About me</li>
            </ul>
          </h2>
          <p className={styles.aboutText}>
            Hi! I'm Sean Brown and I like to make things for the web. My
            interest for web development sparked after taking an HTML and CSS
            course on Udemy. From there I dabbled with learning JavaScript with
            resources like Eloquent JavaScript and freeCodeCamp until I finally
            decided to enroll in Fullstack Academy&apos;s Immersive Fulltime Web
            Devlopment Bootcamp which I graduated from in February of 2023.
          </p>
          <p className={styles.aboutText}>
            As of right now, I'm looking for my first job in the industry while
            also keeping myself busy and learning by creating projects for
            myself and family.
          </p>
        </div>
        <div>
          <h3>Image</h3>
        </div>
      </div>
      <div className={styles.technicalSkillsContainer}>
        <h2>Technical skills</h2>
      </div>
    </div>
  );
};

export default About;
