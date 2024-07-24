import { Center, Environment, Float, useScroll } from '@react-three/drei';
import { MotionConfig } from 'framer-motion';
import { motion } from 'framer-motion-3d';

import { Avatar, SectionTitle } from '../../components';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import config from '../../config';

const Home = () => {
  const sceneContainer = useRef();
  const scroll = useScroll();
  const [section, setSection] = useState(config.pages[0]);

  const Section_Distance = 10;

  useFrame(() => {
    sceneContainer.current.position.z = -scroll.offset * Section_Distance * (scroll.pages - 1);
    sceneContainer.current.position.x = 0;
    setSection(config.pages[Math.round(scroll.offset * (scroll.pages - 1))]);
  });

  return (
    <MotionConfig
      transition={{
        duration: 0.6,
      }}
    >
      <group position-y={-1}>
        <Environment preset='sunset' />
        <Avatar />
        <motion.group ref={sceneContainer} animate={section}>
          {/* Home */}
          <motion.group
            position-y={10}
            variants={{
              home: {
                y: 0,
              },
            }}
          >
            <Center disableY disableZ>
              <SectionTitle
                size={0.6}
                position-x={-1}
                rotation={[0, 0.5, 0]}
                position-y={1.2}
                position-z={0}
                bevelEnabled
                bevelThickness={0.1}
              >
                Sarim
              </SectionTitle>
            </Center>

            <Center disableY disableZ>
              <SectionTitle
                rotation={[0, 0.5, 0]}
                position-x={-2}
                size={1}
                position-y={0}
                position-z={-1}
                bevelEnabled
                bevelThickness={0.1}
              >
                Hassan
              </SectionTitle>
            </Center>
          </motion.group>

          {/* Skills */}
          <motion.group
            position-z={Section_Distance}
            position-y={10}
            variants={{
              skills: {
                y: 0,
              },
            }}
          >
            <SectionTitle position-x={0.5}>SKILLS</SectionTitle>
          </motion.group>

          {/* Projects */}
          <motion.group
            position-y={10}
            variants={{
              projects: {
                y: 0,
              },
            }}
            position-z={Section_Distance * 2}
          >
            <SectionTitle position-x={0.5}>PROJECTS</SectionTitle>
          </motion.group>

          {/* Contact */}
          <motion.group
            position-y={10}
            variants={{ contact: { y: 0 } }}
            position-z={Section_Distance * 3}
          >
            <SectionTitle position-x={0.5}>CONTACT</SectionTitle>
          </motion.group>
        </motion.group>
      </group>
    </MotionConfig>
  );
};

export default Home;
