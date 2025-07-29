import { ScrollControls, useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React from 'react'
import * as THREE from "three";
const MacContanier = () => {
    let model = useGLTF("./mac.glb")
    let meshes = {};
    let tex=useTexture("./red.jpg");
    model.scene.traverse((e) => {
        
        meshes[e.name] = e;
    });
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180)
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0
    meshes.matte.material.roughness = 1;
    meshes.matte.material.metalness = 0;

    const data = useScroll();

    useFrame((state, delta) => {
         meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90)
        // console.log(data.offset);
        
    });
    return (
        <group position={[2,-9,43]}>
            <primitive object={model.scene} />
        </group>
    )
};

export default MacContanier