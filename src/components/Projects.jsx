import styles from "@/styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.sectionTitle}>My Projects</h2>
      <ul className={styles.projectList}>
        <li className={styles.projectItem}>
          <img
            src="/Screenshot 2023-04-14 122911.png"
            alt="peak fitness site"
            className={styles.projectImage}
          />
          <div>
            <div className={styles.projectTitle}>
              <h3>Peak Fitness</h3>
            </div>
            <div className={styles.projectDesc}>
              <p>
                Worked on a team of 5 to create a fitness application that
                allows users to input and track their workouts as well as share
                their workouts with their friends. On top of this there is also
                a calorie tracker and achievements.
              </p>
            </div>
            <div className={styles.projectButtonsBox}>
              <Link href="https://peakfitness.netlify.app/" target="_blank">
                <button
                  id={styles.liveProject}
                  className={styles.projectButtons}
                >
                  <span class="material-symbols-outlined">open_in_new</span>
                  Live
                </button>
              </Link>
              <Link href="https://github.com/peak-fitness/peak" target="_blank">
                <button
                  id={styles.projectCode}
                  className={styles.projectButtons}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                    />
                  </svg>
                  Code
                </button>
              </Link>
            </div>
          </div>
        </li>
        <li className={styles.projectItem}>
          <img
            src="/Screenshot 2023-04-14 142429.png"
            alt="todo list website"
            className={styles.projectImage}
          />
          <div>
            <div className={styles.projectTitle}>
              <h3>Todo List</h3>
            </div>
            <div className={styles.projectDesc}>
              <p>
                A simple todo list app that lets users make an account to store
                their tasks, mark them off as complete and delete them whenever
                they wish.
              </p>
            </div>
            <div className={styles.projectButtonsBox}>
              <Link href="https://todo-list-1g09.onrender.com/" target="_blank">
                <button
                  id={styles.liveProject}
                  className={styles.projectButtons}
                >
                  <span class="material-symbols-outlined">open_in_new</span>
                  Live
                </button>
              </Link>
              <Link
                href="https://github.com/sbrown5757/Todo-List"
                target="_blank"
              >
                <button
                  id={styles.projectCode}
                  className={styles.projectButtons}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                    />
                  </svg>
                  Code
                </button>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
