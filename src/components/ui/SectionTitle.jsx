import styled from 'styled-components';
import { motion } from 'framer-motion';

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  position: relative;
  display: inline-block;
  text-shadow: 0 0 10px rgba(255, 165, 0, 0.3);
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: linear-gradient(to right, #FFA500, #FF6B00);
    margin: 1rem auto;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const SectionTitle = ({ children }) => {
  return (
    <TitleWrapper>
      <Title
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {children}
      </Title>
    </TitleWrapper>
  );
};

export default SectionTitle; 