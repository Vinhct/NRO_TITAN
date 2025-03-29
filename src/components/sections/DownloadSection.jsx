import { motion } from 'framer-motion';
import styled from 'styled-components';
import SectionTitle from '../ui/SectionTitle';

const DownloadContainer = styled.div`
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
`;

const DownloadContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;

const DownloadInfo = styled(motion.div)`
  text-align: center;
  
  @media (min-width: 992px) {
    flex: 1;
    text-align: left;
  }
`;

const DownloadTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
  background: linear-gradient(135deg, #FFA500, #FF6B00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(255, 165, 0, 0.2);
`;

const DownloadDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
`;

const DownloadPlatforms = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

const PlatformIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const DownloadStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
  
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  @media (min-width: 992px) {
    text-align: left;
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #FFA500;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const DownloadButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

const DownloadButton = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 50px;
  background: linear-gradient(45deg, #FFA500, #FF6B00);
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 5px 15px rgba(255, 165, 0, 0.3);
  
  &.secondary {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 165, 0, 0.5);
  }
`;

const DownloadMockup = styled(motion.div)`
  position: relative;
  max-width: 400px;
  
  @media (min-width: 992px) {
    flex: 1;
  }
`;

const DeviceFrame = styled.div`
  position: relative;
  background: url('https://i.pinimg.com/originals/97/ee/70/97ee70e7b2c160d41dc17bfcdc4e9548.jpg') no-repeat center;
  background-size: cover;
  width: 100%;
  aspect-ratio: 1/2;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
    border-radius: 30px;
  }
`;

const GameLogo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  text-align: center;
  
  img {
    max-width: 80%;
    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.5));
  }
`;

const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
`;

const Particle = styled.div`
  position: absolute;
  width: ${props => props.size || '10px'};
  height: ${props => props.size || '10px'};
  background: ${props => props.color || 'rgba(255, 165, 0, 0.2)'};
  border-radius: 50%;
  top: ${props => props.top};
  left: ${props => props.left};
  animation: float ${props => props.duration || '20s'} infinite ease-in-out;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(${props => props.float || '20px'}) translateX(${props => props.drift || '10px'});
    }
  }
`;

const DownloadSection = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: `${Math.random() * 10 + 5}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    color: `rgba(255, 165, 0, ${Math.random() * 0.3})`,
    duration: `${Math.random() * 20 + 10}s`,
    float: `${Math.random() * 50 - 25}px`,
    drift: `${Math.random() * 50 - 25}px`
  }));

  return (
    <DownloadContainer id="download">
      <Particles>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            size={particle.size}
            top={particle.top}
            left={particle.left}
            color={particle.color}
            duration={particle.duration}
            float={particle.float}
            drift={particle.drift}
          />
        ))}
      </Particles>
    
      <SectionTitle>Download Now</SectionTitle>
      <DownloadContent>
        <DownloadInfo
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <DownloadTitle>Ready to Join the Battle?</DownloadTitle>
          <DownloadDescription>
            Download Dragon Ball Z: Rise of the Warriors now and experience the most immersive
            Dragon Ball game ever created. Available on multiple platforms!
          </DownloadDescription>
          
          <DownloadPlatforms>
            <PlatformIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>🖥️</PlatformIcon>
            <PlatformIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>📱</PlatformIcon>
            <PlatformIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>🎮</PlatformIcon>
            <PlatformIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>🎯</PlatformIcon>
          </DownloadPlatforms>
          
          <DownloadStats>
            <StatItem>
              <StatValue>12M+</StatValue>
              <StatLabel>Downloads</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>4.8</StatValue>
              <StatLabel>App Rating</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>100+</StatValue>
              <StatLabel>Characters</StatLabel>
            </StatItem>
          </DownloadStats>
          
          <DownloadButtons>
            <DownloadButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
            >
              Download Now
            </DownloadButton>
            <DownloadButton
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
            >
              Learn More
            </DownloadButton>
          </DownloadButtons>
        </DownloadInfo>
        
        <DownloadMockup
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <DeviceFrame>
            <GameLogo>
              <img src="/dragon-banner.png" alt="Dragon Ball Z: Rise of the Warriors" />
            </GameLogo>
          </DeviceFrame>
        </DownloadMockup>
      </DownloadContent>
    </DownloadContainer>
  );
};

export default DownloadSection; 