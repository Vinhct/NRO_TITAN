import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { timeline } from '../data/timeline';

const TimelineContainer = styled.div`
  background: linear-gradient(135deg, #000000, #434343);
  min-height: 100vh;
  color: white;
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const BackButton = styled(Link)`
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: white;
  text-decoration: none;
  
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const TimelineScroll = styled.div`
  display: flex;
  padding: 2rem;
  overflow-x: auto;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 165, 0, 0.3);
    transform: translateY(-50%);
  }
`;

const TimelineItem = styled(motion.div)`
  flex: 0 0 300px;
  margin-right: 4rem;
  position: relative;
  cursor: pointer;
  
  &:last-child {
    margin-right: 0;
  }
`;

const DragonBall = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #FFB800, #FF8C00);
  box-shadow: 0 0 20px rgba(255, 140, 0, 0.5);
  position: relative;
  margin: 0 auto 2rem;
  cursor: pointer;
  
  &::before {
    content: '${props => props.stars}';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(255, 165, 0, 0.4), transparent 70%);
    z-index: -1;
  }
`;

const TimelineContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const TimelineImage = styled.div`
  width: 100%;
  height: 150px;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const TimelineYear = styled.div`
  font-size: 0.9rem;
  color: #FFB800;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
`;

const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    position: relative;
    
    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #FFB800;
    }
  }
`;

const DetailOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 2rem;
`;

const DetailContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 800px;
  color: white;
  position: relative;
`;

function Timeline() {
  const [selectedEra, setSelectedEra] = useState(null);
  const scrollRef = useRef(null);
  
  const handleEraClick = (era) => {
    setSelectedEra(era);
  };
  
  const closeDetail = () => {
    setSelectedEra(null);
  };
  
  return (
    <TimelineContainer>
      <Header>
        <Title>Dragon Ball Timeline</Title>
        <BackButton to="/">Back to Menu</BackButton>
      </Header>
      
      <TimelineScroll ref={scrollRef}>
        {timeline.map((era, index) => (
          <TimelineItem
            key={era.id}
            onClick={() => handleEraClick(era)}
          >
            <DragonBall
              stars={era.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <TimelineContent
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <TimelineImage src={era.image} />
              <TimelineYear>{era.year}</TimelineYear>
              <TimelineTitle>{era.era}</TimelineTitle>
              <p>{era.description}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineScroll>
      
      {selectedEra && (
        <DetailOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeDetail}
        >
          <DetailContent
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <CloseButton onClick={closeDetail}>&times;</CloseButton>
            <h2>{selectedEra.era}</h2>
            <TimelineYear>{selectedEra.year}</TimelineYear>
            <p>{selectedEra.description}</p>
            <h3>Key Events:</h3>
            <EventList>
              {selectedEra.key_events.map((event, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {event}
                </motion.li>
              ))}
            </EventList>
            <h3>Major Characters:</h3>
            <p>{selectedEra.major_characters.join(', ')}</p>
          </DetailContent>
        </DetailOverlay>
      )}
    </TimelineContainer>
  );
}

export default Timeline; 