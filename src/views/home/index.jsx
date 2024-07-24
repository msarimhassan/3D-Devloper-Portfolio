import { Center, Environment, Float, useScroll } from '@react-three/drei';

import { Avatar, SectionTitle } from '../../components';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Home = () => {
  const sceneContainer = useRef();
  const scroll = useScroll();

  const Section_Distance = 10;

  useFrame(() => {
    sceneContainer.current.position.z = -scroll.offset * Section_Distance * (scroll.pages - 1);
  });

  return (
    <group position-y={-1}>
      <Environment preset='sunset' />
      <Avatar />
      <group ref={sceneContainer}>
        {/* Home */}
        <group>
          <SectionTitle position-x={0.5}>HOME</SectionTitle>
        </group>
        {/* About */}
        <group position-z={Section_Distance}>
          <SectionTitle position-x={0.5}>SKILLS</SectionTitle>
        </group>
        {/* Projects */}
        <group position-z={Section_Distance * 2}>
          <SectionTitle position-x={0.5}>PROJECTS</SectionTitle>
        </group>
        {/* Contact */}
        <group position-z={Section_Distance * 3}>
          <SectionTitle position-x={0.5}>CONTACT</SectionTitle>
        </group>
      </group>

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
    </group>
  );
};

export default Home;
