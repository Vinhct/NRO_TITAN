import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardWrapper = styled(motion.div)`
  background: rgba(17, 24, 39, 0.8);
  border-radius: 16px;
  padding: 1.5rem;
  color: white;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 165, 0, 0.3),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CardStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.875rem;
  }
  
  .value {
    font-weight: bold;
  }
`;

const Card = ({ image, title, stats, ...props }) => {
  return (
    <CardWrapper
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      <CardImage src={image} />
      <CardTitle>{title}</CardTitle>
      <CardStats>
        {Object.entries(stats).map(([key, value]) => (
          <StatItem key={key}>
            <span className="label">{key}:</span>
            <span className="value">{value}</span>
          </StatItem>
        ))}
      </CardStats>
    </CardWrapper>
  );
};

export default Card; 