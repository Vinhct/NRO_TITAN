import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroContainer = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://i.ytimg.com/vi/4kiMT-n2M4Y/maxresdefault.jpg') no-repeat center center;
    background-size: cover;
    z-index: -2;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6));
    z-index: -1;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #FFA500, #FF6B00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 165, 0, 0.5);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const HeroButton = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 8px;
  background: ${props => props.secondary ? 'rgba(255,255,255,0.1)' : 'linear-gradient(45deg, #FFA500, #FF6B00)'};
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(255, 165, 0, 0.5);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          NRO TITAN 
        </HeroTitle>
        <HeroSubtitle
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Embark on an epic journey through the Dragon Ball universe
        </HeroSubtitle>
        <HeroButtons
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HeroButton href="#download">Play Now</HeroButton>
          <HeroButton href="#trailer" secondary>Watch Trailer</HeroButton>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection; 