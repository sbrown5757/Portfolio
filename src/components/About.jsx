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
            Hi! I&apos;m Sean Brown and I like to make things for the web. My
            interest for web development sparked after taking an HTML and CSS
            course on Udemy. From there I dabbled with learning JavaScript with
            resources like Eloquent JavaScript and freeCodeCamp until I finally
            decided to enroll in Fullstack Academy&apos;s Immersive Fulltime Web
            Devlopment Bootcamp which I graduated from in February of 2023.
          </p>
          <p className={styles.aboutText}>
            As of right now, I&apos;m looking for my first job in the industry
            while also keeping myself busy and learning by creating projects
            that interest and challenge me.
          </p>
          <p className={styles.aboutText}>
            Outside of web development, I&apos;m a huge history nerd that loves
            learning about the 19th and 20th century and industrialization.
            I&apos;m an animal lover that has two cats named Bean and Sam as
            well as two dogs. (I prefer cats though). Other than that I love to
            go to the gym and go for walks and I am a big fan of grand strategy
            video games like Hearts of Iron IV and Victoria 3.
          </p>
        </div>
        <div>
          <h3>Image</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
