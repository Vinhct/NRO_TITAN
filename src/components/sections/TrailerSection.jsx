import { motion } from 'framer-motion';
import styled from 'styled-components';
import SectionTitle from '../ui/SectionTitle';

const TrailerContainer = styled.div`
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
`;

const TrailerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
`;

const TrailerVideo = styled(motion.div)`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  aspect-ratio: 16/9;
  background: url('https://assets-prd.ignimgs.com/2022/07/24/dragon-ball-super-super-hero-1658674537982.jpg') no-repeat center;
  background-size: cover;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    z-index: 2;
  }
  
  @media (min-width: 992px) {
    flex: 1;
  }
`;

const PlayButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 165, 0, 0.8);
  border: none;
  cursor: pointer;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 25px solid white;
    margin-left: 8px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    border: 2px solid rgba(255, 165, 0, 0.5);
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(0.95); opacity: 0.7; }
    50% { transform: scale(1.05); opacity: 0.3; }
    100% { transform: scale(0.95); opacity: 0.7; }
  }
`;

const TrailerInfo = styled(motion.div)`
  color: white;
  
  @media (min-width: 992px) {
    flex: 1;
  }
`;

const TrailerTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(to right, #FFA500, #FF6B00);
  }
`;

const TrailerDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
`;

const TrailerFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TrailerFeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '✓';
    color: #FFA500;
    font-weight: bold;
  }
`;

const TrailerButtonLink = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #FFA500, #FF6B00);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0 5px 15px rgba(255, 165, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 165, 0, 0.4);
  }
`;

const TrailerSection = () => {
  return (
    <TrailerContainer id="trailer">
      <SectionTitle>Watch Trailer</SectionTitle>
      <TrailerContent>
        <TrailerVideo
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <iframe 
            src="https://www.youtube.com/embed/CYcrmsdZuyw" 
            title="Dragon Ball Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </TrailerVideo>
        
        <TrailerInfo
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TrailerTitle>Dragon Ball Z: Rise of the Warriors</TrailerTitle>
          <TrailerDescription>
            Experience the most authentic Dragon Ball game ever created. Stunning visuals, 
            intense combat, and an epic storyline await as you journey through the Dragon Ball universe.
          </TrailerDescription>
          
          <TrailerFeatures>
            <TrailerFeatureItem>Stunning 4K graphics</TrailerFeatureItem>
            <TrailerFeatureItem>Over 100 playable characters</TrailerFeatureItem>
            <TrailerFeatureItem>Original storyline</TrailerFeatureItem>
            <TrailerFeatureItem>Online multiplayer battles</TrailerFeatureItem>
          </TrailerFeatures>
          
          <TrailerButtonLink
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pre-order Now
          </TrailerButtonLink>
        </TrailerInfo>
      </TrailerContent>
    </TrailerContainer>
  );
};

export default TrailerSection; 