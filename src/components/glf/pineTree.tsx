import { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Mesh } from 'three'
import { Box } from '@chakra-ui/react'

function MeshComponent() {
    const fileUrl = '/gl/pine_tree.glb'
    const mesh = useRef<Mesh>(null!)
    const gltf = useLoader(GLTFLoader, fileUrl)

    useFrame(() => {
        mesh.current.rotation.y += 0.01
    })

    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}

export function PineTree() {
    return (
        <Box display='flex' justifyContent='center' alignItems='center'>
            <Canvas style={{ width: '100%', height: '150%' }} camera={{ zoom: 0.85 }}>
                <OrbitControls />
                <ambientLight />
                <pointLight position={[8, 8, 8]} />
                <MeshComponent />
            </Canvas>
        </Box>
    )
}
