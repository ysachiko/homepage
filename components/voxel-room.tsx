import {useState, useEffect, useRef, useCallback} from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../lib/model';

function easeOutCirc(x: number) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));

}

interface ModelPosition {
	x?: number
	y?: number
	z?: number
}

interface VoxelRoomProps {
	modelName?: string
	initialScale?: number
	pos?: ModelPosition
}


const VoxelRoom = ({modelName = '/my_computer.glb', initialScale = undefined, pos}: VoxelRoomProps) => {
    const refContainer = useRef<HTMLDivElement>();
    const [loading, setLoading] = useState(true);
    const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();
    const [_camera, setCamera] = useState<THREE.OrthographicCamera>();
    const [target] = useState(new THREE.Vector3(pos?.x, pos?.y, pos?.z));
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10, 
            20 * Math.cos(0.2 * Math.PI)
        )
    )

    const [scene] = useState(new THREE.Scene());
    const [_controls, setControls] = useState<OrbitControls>()
	
    const handleWindowResize = useCallback(() => {
        const {current: container} = refContainer;
        if (container && renderer) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;

            renderer.setSize(scW, scH);
			
        }
    }, [renderer]);
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const {current: container} = refContainer;
        if (container && !renderer) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
			  })
			  renderer.setPixelRatio(window.devicePixelRatio)
			  renderer.setSize(scW, scH)
			  // @ts-ignore
			  renderer.outputEncoding = THREE.sRGBEncoding
			  container.appendChild(renderer.domElement)
			  setRenderer(renderer)
		
			  // 640 -> 240
			  // 8   -> 6
			  const scale = initialScale ?? scH * 0.005 + 4.8
			  const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
			  )
			  camera.position.copy(initialCameraPosition)
			  camera.lookAt(target)
			  setCamera(camera)
			  const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
			  scene.add(ambientLight)
		
			  const controls = new OrbitControls(camera, renderer.domElement)
			  controls.autoRotate = true
			  controls.target = target
			  setControls(controls)

			  loadGLTFModel(scene, modelName, {
                receiveShadow: false,
                castShadow: false
			  }).then(() => {
                console.log('rerender')
                animate()
                setLoading(false)
			  })
		
			  let req: number = 0
			  let frame = 0
			  const animate = () => {
                req = requestAnimationFrame(animate)
		
                frame = frame <= 100 ? frame + 1 : frame
		
                if (frame <= 100) {
				  const p = initialCameraPosition
				  const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
		
				  camera.position.y = 10
				  camera.position.x =
					p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
				  camera.position.z =
					p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
				  camera.lookAt(target)
                } else {
				  controls.update()
                }
		
                renderer.render(scene, camera)
			  }
		
			  return () => {
                cancelAnimationFrame(req)
                renderer.domElement.remove() 
                renderer.dispose()
			  } 
        }
    }, [])
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
		  window.removeEventListener('resize', handleWindowResize, false)
        }
	  }, [renderer, handleWindowResize])

    return (
        <Box
            // @ts-ignore
            ref={refContainer} 
            className='voxel-room' m='auto' 
            mt={['-20px', '-60px', '-30px']}
            mb={['-40px', '-80px', '-30px']}
            w={[200, 440, 340]}
            h={[200, 440, 340]}
            position="relative"
        >
            {loading && <Spinner 
                size="xl" 
                position="absolute" 
                left="50%" 
                top="50%" 
                ml="calc(0px - var(--spinner-size) / 2)"
                mt="calc(0px - var(--spinner-size))"

            />}
        </Box>
    )

}

export default VoxelRoom;