import { motion } from "framer-motion";

import { SkillsData } from "../../data/SkillsData";
import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./skills.module.scss";

const skillsOpen = "<skills>";
const skillsClose = "</skills>";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.skillsopen}>{skillsOpen}</h3>
          <div className={styles.skills_content}>
            {SkillsData.map((item) => (
              <a href={item.link} target='_blank' rel='noreferrer'> <div  className={styles.icon}>{item.icon}
              <p id="SkillTitles" className={styles.skill_name}>{item.name}</p></div></a>
              ))}
            
              {SkillsData.map((item)=>(
                <>
                
                </>
              ))}
              
          </div>
          <h3 className={styles.skillsclose}>{skillsClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
