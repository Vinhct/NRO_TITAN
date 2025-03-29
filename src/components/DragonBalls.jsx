import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(5deg);
  }
  50% {
    transform: translateY(0) rotate(0deg);
  }
  75% {
    transform: translateY(15px) rotate(-5deg);
  }
`;

const glow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 5px rgba(255, 165, 0, 0.6));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(255, 165, 0, 0.8));
  }
`;

const DragonBallsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 10;
`;

const DragonBall = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #FFD700, #FFA500);
  box-shadow: 
    0 0 20px rgba(255, 165, 0, 0.5),
    0 0 40px rgba(255, 165, 0, 0.3),
    0 0 60px rgba(255, 165, 0, 0.1);
  animation: 
    ${float} ${props => props.floatDuration || '6s'} infinite ease-in-out,
    ${glow} ${props => props.glowDuration || '4s'} infinite ease-in-out;
  animation-delay: ${props => props.delay || '0s'}, ${props => props.glowDelay || '0s'};
  top: ${props => props.top};
  left: ${props => props.left};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    width: 15%;
    height: 15%;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
`;

const Star = styled.div`
  position: relative;
  width: ${props => props.size || '12px'};
  height: ${props => props.size || '12px'};
  background: #FF4500;
  clip-path: polygon(
    50% 0%, 
    61% 35%, 
    98% 35%, 
    68% 57%, 
    79% 91%, 
    50% 70%, 
    21% 91%, 
    32% 57%, 
    2% 35%, 
    39% 35%
  );
  filter: drop-shadow(0 0 3px rgba(255, 69, 0, 0.8));
  transform: scale(${props => props.scale || 1});
`;

// Hàm render số sao dựa trên số
const renderStars = (count) => {
  const stars = [];
  
  for (let i = 0; i < count; i++) {
    const angle = (360 / count) * i;
    const radius = count > 1 ? 12 : 0; // Khoảng cách từ tâm nếu có nhiều hơn 1 sao
    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius;
    
    stars.push(
      <Star 
        key={i}
        style={{ 
          position: 'absolute',
          transform: `translate(${x}px, ${y}px) scale(${count > 5 ? 0.8 : 1})`
        }}
        size={count > 5 ? '10px' : '12px'}
      />
    );
  }
  
  return stars;
};

const DragonBalls = () => {
  // Bố trí các ngọc rồng xung quanh trang
  const balls = [
    { stars: 1, top: '10%', left: '20%', floatDuration: '7s', glowDuration: '5s', delay: '0s', glowDelay: '0.5s' },
    { stars: 2, top: '15%', left: '85%', floatDuration: '8s', glowDuration: '4s', delay: '0.2s', glowDelay: '0.7s' },
    { stars: 3, top: '35%', left: '8%', floatDuration: '9s', glowDuration: '6s', delay: '0.5s', glowDelay: '0.2s' },
    { stars: 4, top: '25%', left: '75%', floatDuration: '10s', glowDuration: '5s', delay: '0.7s', glowDelay: '0.4s' },
    { stars: 5, top: '60%', left: '88%', floatDuration: '8s', glowDuration: '4s', delay: '0.3s', glowDelay: '0.6s' },
    { stars: 6, top: '75%', left: '10%', floatDuration: '9s', glowDuration: '6s', delay: '0.6s', glowDelay: '0.3s' },
    { stars: 7, top: '85%', left: '70%', floatDuration: '7s', glowDuration: '5s', delay: '0.4s', glowDelay: '0.8s' }
  ];
  
  // Thêm bóng ngọc rồng mới ở giữa các phần section
  const additionalBalls = [
    { stars: 1, top: '110%', left: '30%', floatDuration: '7s', glowDuration: '5s', delay: '0.2s', glowDelay: '0.3s' },
    { stars: 4, top: '160%', left: '85%', floatDuration: '8s', glowDuration: '4s', delay: '0.5s', glowDelay: '0.2s' },
    { stars: 7, top: '210%', left: '15%', floatDuration: '9s', glowDuration: '6s', delay: '0.3s', glowDelay: '0.7s' },
    { stars: 3, top: '250%', left: '75%', floatDuration: '7s', glowDuration: '5s', delay: '0.7s', glowDelay: '0.4s' },
    { stars: 2, top: '350%', left: '25%', floatDuration: '10s', glowDuration: '4s', delay: '0.1s', glowDelay: '0.6s' },
    { stars: 5, top: '390%', left: '80%', floatDuration: '8s', glowDuration: '6s', delay: '0.6s', glowDelay: '0.2s' }
  ];
  
  const allBalls = [...balls, ...additionalBalls];

  return (
    <DragonBallsContainer>
      {allBalls.map((ball, index) => (
        <DragonBall
          key={`ball-${index}`}
          top={ball.top}
          left={ball.left}
          floatDuration={ball.floatDuration}
          glowDuration={ball.glowDuration}
          delay={ball.delay}
          glowDelay={ball.glowDelay}
        >
          {renderStars(ball.stars)}
        </DragonBall>
      ))}
    </DragonBallsContainer>
  );
};

export default DragonBalls;
