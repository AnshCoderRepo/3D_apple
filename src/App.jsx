import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css";
import {Environment, OrbitControls, ScrollControls} from "@react-three/drei"
import MacContanier from './MacContanier';

const App = () => {
  return (
    <div className='w-full h-screen font-["Helvetica_Now_Display"] relative'>
      {/* Navbar - made visible with proper z-index and background */}
      <div className='navbar flex gap-10 py-4 fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm justify-center'>
        {["iphone", "ipad", "macbook", "services", "ios", "help"].map((item, index) => (
          <a 
            key={index} 
            href="#" 
            className='text-white capitalize font-[500] text-sm hover:text-gray-300 px-3'
          >
            {item}
          </a>
        ))}
      </div>

      {/* Content area shifted down */}
      <div className='pt-16'> {/* Matches navbar height */}
        <div className='absolute flex flex-col items-center text-white top-40 left-[52vw] -translate-x-1/2 '>
          <h3 className='macbook-text text-5xl tracking-tighter font-[700] mb-2'>MacBook Pro</h3>
          <h5 className='mb-4'>Oh so Pro</h5>
          <h5 className='text-center w-3/4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque?
          </h5>
        </div>

        {/* Canvas */}
        <Canvas 
          camera={{ fov: 20, position: [0, -1, 180] }}
          style={{ position: 'absolute', top: '80px' }}
        >
          <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr']} />
          <ScrollControls pages={3}>
            <MacContanier/>
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
};

export default App;