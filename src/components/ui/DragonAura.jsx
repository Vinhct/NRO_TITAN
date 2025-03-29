import { motion } from 'framer-motion';
import styled from 'styled-components';

const AuraElement = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vw;
  background: radial-gradient(circle at center, 
    rgba(255, 165, 0, 0) 0%,
    rgba(255, 165, 0, 0.1) 30%,
    rgba(255, 165, 0, 0) 70%
  );
  z-index: 0;
`;

const DragonAura = () => {
  return (
    <AuraElement
      animate={{
        scale: [1, 1.2, 1],
        rotate: 360
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

export default DragonAura; 