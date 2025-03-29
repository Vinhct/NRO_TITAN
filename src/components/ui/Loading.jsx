import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 200px;
`;

const EnergyBall = styled(motion.div)`
  width: 60px;
  height: 60px;
  background: radial-gradient(circle at 30% 30%, #FFA500, #FF6B00);
  border-radius: 50%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: radial-gradient(circle at center, rgba(255, 165, 0, 0.4), transparent 70%);
    border-radius: 50%;
    animation: pulse 1.5s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 0.5; }
  }
`;

const LoadingText = styled(motion.div)`
  color: white;
  font-size: 1.2rem;
  margin-top: 1rem;
  text-align: center;
`;

const Loading = ({ text = "Loading..." }) => {
  return (
    <LoadingWrapper>
      <motion.div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <EnergyBall
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <LoadingText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {text}
        </LoadingText>
      </motion.div>
    </LoadingWrapper>
  );
};

export default Loading; 