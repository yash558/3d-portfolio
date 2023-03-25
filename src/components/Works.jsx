import React, { useState, useEffect } from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { eye, github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full  h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 gap-2 card-img_hover'>
            <div
              onClick={() => window.open(live_link, "_blank")}
              className='white-gradient border-2 border-[#000] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={eye}
                alt='source code'
                className='w-1/2 h-1/2 object-contain fill-white'
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// console.log(allCatValues);
const Works = () => { 
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState(projects);
  const [filterWork, setFilterWork] = useState(projects);
  const updatedCategory = [...new Set(projects.map((item) => item.category)), 'All'];

  useEffect(() => {
    setWorks(projects);
    setFilterWork(updatedCategory);
  }, [])
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterWork(works);
        return;
      } else {
        const updated = works.filter((work) => {
          return work.category === item;
        });
        setFilterWork(updated);
      }

    }, []);
  }
  console.log(filterWork)


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following Projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies and manage projects effectively.
        </motion.p>
      </div>
      {/* <div className="flex flex-wrap gap-10 justify-center mt-10">
        {['Web 3.0', 'Web App', "Mobile App", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`px-3 py-2 text-[#000] cursor-pointer rounded-md bg-[#fff] ${activeFilter === item ? 'text-[#fff] bg-[#323ec4]' : ' '}`}
          >
            {item}
          </div>
        ))}
      </div> */}
      <div className='mt-20 flex flex-wrap gap-7 items-center justify-center cursor-pointer'>
        {projects.map((work, index) => (
          <ProjectCard key={work.name} index={index} {...work} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects');