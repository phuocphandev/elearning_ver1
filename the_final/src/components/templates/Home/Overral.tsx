import styles from "../../../sass/components/Overral.module.scss";
import cn from 'classnames'

export const Overral = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 w-[90%] text-white my-10 m-auto gap-5">
      <div className={cn(styles.shining, "px-5 py-2 row-span-2 cols-span-3 md:cols-span-1 bg-[var(--quaternary)] overflow-hidden")}>
        <p className="font-bold uppercase text-2xl ">Courses</p>
        <ul className="">
          <span className="font-bold">Learning through practical projects</span>
          , learning goes hand-in-hand with action, not just theoretical
          rambling, analyzing the root of the problem, building from small
          examples to executing a large real-world project so that after the
          course, students can immediately apply what they have learned.
          <li className={styles.list}>Over 1000 practical exercises and real-world projects</li>
          <li className={styles.list}>The most up-to-date technologies</li>
          <li className={styles.list}>Vivid, visual lectures with images, examples</li>
          <li className={styles.list}>Analytical thinking, problem-solving in projects</li>
          <li className={styles.list}>
            Learn from experiences, project processes, standards in projects
          </li>
          <li className={styles.list}>
            Opportunities for internships at major companies like FPT, Microsoft
          </li>
        </ul>
      </div>
      <div className={cn(styles.shining,"px-5 py-2 row-span-1 cols-span-3 md:cols-span-1 bg-[var(--tertiary)] overflow-hidden")}>
        <ul>
          <span className="font-bold uppercase text-2xl">Roadmaps</span>
          <li className={styles.list}>
            Structured roadmap from beginner to advanced professional level,
            progressive learning
          </li>
          <li className={styles.list}>Learn, practice coding, analytical skills, soft skills</li>
          <li className={styles.list}>Coaching to develop capabilities and passion for programming</li>
        </ul>
      </div>
      <div className={cn(styles.shining, "px-5 py-2 row-span-1 cols-span-3 md:cols-span-1 bg-[#3a5dc5] overflow-hidden")}>
        <ul>
          <span className="font-bold uppercase text-2xl">Learning System</span>
          <li className={styles.list}>
            Automatic grading for multiple choice questions and providing
            tailored questions based on student's level
          </li>
          <li className={styles.list}>
            Track statistics on video views, assignments completed, scores over
            time
          </li>
          <li className={styles.list}>
            Analyze and compare learning abilities of students at the same level
            to set learning goals
          </li>
        </ul>
      </div>
      <div className={cn(styles.shining,"px-5 py-2 row-span-1 cols-span-3 md:cols-span-1 bg-[var(--tertiary)] overflow-hidden")}>
        <ul>
          <span className="font-bold uppercase text-2xl">Mentors</span>
          <li className={styles.list}>
            Interact with mentors and instructors through discussion boards
          </li>
          <li className={styles.list}>Code reviews and feedback from mentors</li>
          <li className={styles.list}>Grade discussions and interactions between students</li>
        </ul>
      </div>
      <div className={cn(styles.shining, "px-5 py-2 row-span-1 cols-span-3 md:cols-span-1 bg-[var(--quaternary)] overflow-hidden")}>
        <ul>
          <span className="font-bold uppercase text-2xl">Certificate</span>
          <li className={styles.list}>Grade assignments and offer online consultations for reviews</li>
          <li className={styles.list}>Our system also generates a unique online CV for you</li>
          <li className={styles.list}>Connect your CV to E-Hub partners</li>
        </ul>
      </div>
    </div>
  );
};

export default Overral;
