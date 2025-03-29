import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../components/ui/Navbar';
import DragonAura from '../components/ui/DragonAura';
import DragonBalls from '../components/DragonBalls';
import FeaturesSection from '../components/sections/FeaturesSection';
import NewsSection from '../components/sections/NewsSection';
import TrailerSection from '../components/sections/TrailerSection';
import CommunitySection from '../components/sections/CommunitySection';
import DownloadSection from '../components/sections/DownloadSection';

const shootingStar = keyframes`
  0% {
    transform: translateX(0) translateY(0) rotate(-45deg);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(-500px) translateY(500px) rotate(-45deg);
    opacity: 0;
  }
`;

const shootingStarAlt = keyframes`
  0% {
    transform: translateX(0) translateY(0) rotate(-30deg);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(-700px) translateY(300px) rotate(-30deg);
    opacity: 0;
  }
`;

const shootingStarAlt2 = keyframes`
  0% {
    transform: translateX(0) translateY(0) rotate(-60deg);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(-300px) translateY(600px) rotate(-60deg);
    opacity: 0;
  }
`;

const twinkle = keyframes`
  0%, 100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const HomeContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: transparent;
  color: white;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/ui/bg-stars.jpg') no-repeat center center fixed;
    background-size: cover;
    opacity: 0.5;
    z-index: -5;
  }
`;

const Star = styled.div`
  position: fixed;
  width: ${props => props.size || '2px'};
  height: ${props => props.size || '2px'};
  border-radius: 50%;
  background-color: white;
  top: ${props => props.top};
  left: ${props => props.left};
  opacity: ${props => props.opacity || 0.8};
  z-index: -4;
  animation: ${twinkle} ${props => props.duration || '3s'} infinite ease-in-out;
  animation-delay: ${props => props.delay || '0s'};
`;

const ShootingStar = styled.div`
  position: fixed;
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '2px'};
  background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8), transparent);
  top: ${props => props.top};
  left: ${props => props.left};
  opacity: ${props => props.opacity || 0.8};
  z-index: -4;
  animation: ${props => {
    if (props.type === 1) return shootingStarAlt;
    if (props.type === 2) return shootingStarAlt2;
    return shootingStar;
  }} ${props => props.duration || '3s'} infinite linear;
  animation-delay: ${props => props.delay || '0s'};
  transform-origin: top left;
  
  &::before {
    content: '';
    position: absolute;
    width: ${props => props.headSize || '6px'};
    height: ${props => props.headSize || '6px'};
    border-radius: 50%;
    background: white;
    left: 0;
    top: -${props => (parseInt(props.headSize || '6') / 2 - 1)}px;
    box-shadow: 0 0 ${props => props.glow || '10px'} ${props => props.glow || '2px'} rgba(255, 255, 255, 0.8);
  }
`;

const GlassSection = styled.section`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 165, 0, 0.3), transparent);
  }
`;

const HeroBanner = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: url('https://i.ytimg.com/vi/4kiMT-n2M4Y/maxresdefault.jpg') no-repeat center center;
  background-size: 100% 100%;
  z-index: -3;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3));
    z-index: 1;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  z-index: 5;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 15px;
    filter: blur(10px);
    z-index: -1;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 6rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #FFA500, #FF6B00, #FF8C00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 165, 0, 0.7);
  
  @keyframes pulse {
    0% { text-shadow: 0 0 30px rgba(255, 165, 0, 0.7); }
    50% { text-shadow: 0 0 50px rgba(255, 165, 0, 0.9); }
    100% { text-shadow: 0 0 30px rgba(255, 165, 0, 0.7); }
  }
  
  animation: pulse 3s infinite ease-in-out;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  max-width: 600px;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const HeroButton = styled(motion.a)`
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  background: ${props => props.secondary 
    ? 'rgba(0,0,0,0.5)' 
    : 'linear-gradient(45deg, #FFA500, #FF6B00)'};
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: ${props => props.secondary ? '2px solid rgba(255,165,0,0.5)' : 'none'};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.secondary 
      ? '0 10px 25px rgba(255, 165, 0, 0.2)' 
      : '0 10px 25px rgba(255, 165, 0, 0.5)'};
  }
`;

function Home() {
  // Tạo mảng sao ngẫu nhiên
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 3 + 1}px`,
    opacity: Math.random() * 0.7 + 0.3,
    duration: `${Math.random() * 3 + 2}s`,
    delay: `${Math.random() * 5}s`
  }));
  
  // Tạo mảng mưa sao băng với nhiều kiểu khác nhau
  const shootingStars = Array.from({ length: 20 }, (_, i) => {
    const starSize = Math.random() * 3 + 1;
    const type = Math.floor(Math.random() * 3); // 0, 1, hoặc 2
    const isBright = Math.random() > 0.7;
    
    return {
      id: i,
      top: `${Math.random() * 70}%`,
      left: `${Math.random() * 30 + 70}%`, // Phần lớn xuất hiện từ bên phải
      width: `${Math.random() * 120 + 80}px`,
      height: `${Math.random() * 2 + 1}px`,
      headSize: `${starSize * 3}px`,
      glow: isBright ? '20px' : '10px',
      opacity: isBright ? 1 : 0.7,
      duration: `${Math.random() * 4 + 3}s`,
      delay: `${Math.random() * 15}s`,
      type
    };
  });

  return (
    <HomeContainer>
      {stars.map(star => (
        <Star 
          key={`star-${star.id}`}
          top={star.top}
          left={star.left}
          size={star.size}
          opacity={star.opacity}
          duration={star.duration}
          delay={star.delay}
        />
      ))}
      
      {shootingStars.map(star => (
        <ShootingStar
          key={`shooting-${star.id}`}
          top={star.top}
          left={star.left}
          width={star.width}
          height={star.height}
          headSize={star.headSize}
          glow={star.glow}
          opacity={star.opacity}
          duration={star.duration}
          delay={star.delay}
          type={star.type}
        />
      ))}
      
      <Navbar />
      <DragonAura />
      <DragonBalls />
      <HeroBanner />
      
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
      
      <GlassSection>
        <FeaturesSection />
      </GlassSection>
      
      <GlassSection>
        <NewsSection />
      </GlassSection>
      
      <GlassSection>
        <TrailerSection />
      </GlassSection>
      
      <GlassSection>
        <CommunitySection />
      </GlassSection>
      
      <GlassSection>
        <DownloadSection />
      </GlassSection>
    </HomeContainer>
  );
}

export default Home;