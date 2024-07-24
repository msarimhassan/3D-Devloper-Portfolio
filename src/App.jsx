import { ScrollControls, Scroll } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import config from './config';
import Home from './views/home';

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
      <color attach='background' args={['#f5f3ee']} />
      <fog attach='fog' args={['#f5f3ee', 10, 50]} />
      <ScrollControls damping={0.1} pages={config.pages.length} maxSpeed={0.2}>
        <Home />
        <Scroll html>
          <div>Hello world</div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default App;
