import { motion } from 'framer-motion';
import styled from 'styled-components';
import SectionTitle from '../ui/SectionTitle';

const CommunityContainer = styled.div`
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
`;

const CommunityContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CommunityInfo = styled(motion.div)`
  color: white;
`;

const CommunityTitle = styled.h3`
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

const CommunityDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialIcon = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(45deg, #FFA500, #FF6B00);
    border-color: transparent;
  }
`;

const JoinForm = styled(motion.form)`
  margin-top: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: rgba(255, 165, 0, 0.5);
    box-shadow: 0 0 0 2px rgba(255, 165, 0, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 8px;
  background: linear-gradient(45deg, #FFA500, #FF6B00);
  color: white;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(255, 165, 0, 0.3);
`;

const CommunityImages = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 1rem;
  height: 100%;
  min-height: 400px;
`;

const CommunityImage = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  
  &:nth-child(1) {
    grid-column: 1 / 4;
    grid-row: 1 / 4;
  }
  
  &:nth-child(2) {
    grid-column: 4 / 7;
    grid-row: 1 / 3;
  }
  
  &:nth-child(3) {
    grid-column: 4 / 7;
    grid-row: 3 / 5;
  }
  
  &:nth-child(4) {
    grid-column: 1 / 3;
    grid-row: 4 / 7;
  }
  
  &:nth-child(5) {
    grid-column: 3 / 7;
    grid-row: 5 / 7;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    pointer-events: none;
  }
`;

const StatsCounter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const CounterItem = styled.div`
  text-align: center;
`;

const CounterValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #FFA500;
`;

const CounterLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CommunitySection = () => {
  const communityImages = [
    {
      id: 1,
      image: 'https://www.gocdienanh.com/wp-content/uploads/2019/03/review-bay-vien-ngoc-rong-sieu-cap-broly.jpg',
      title: 'Tournament'
    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.YO8btVPyHjwUS0hI_O-ZfAHaKW?pid=ImgDet&w=474&h=662&rs=1',
      title: 'Gaming Event'
    },
    {
      id: 3,
      image: 'https://th.bing.com/th/id/OIP.KQZ4RIj49tLkiuJHtp2nRgHaFj?pid=ImgDet&w=474&h=355&rs=1',
      title: 'Cosplay'
    },
    {
      id: 4,
      image: 'https://th.bing.com/th/id/OIP.KQZ4RIj49tLkiuJHtp2nRgHaFj?pid=ImgDet&w=474&h=355&rs=1',
      title: 'Fan Art'
    },
    {
      id: 5,
      image: 'https://th.bing.com/th/id/OIP.6roNtNW5jIxhi3rNDdGrDwHaEo?rs=1&pid=ImgDetMain',
      title: 'Community Event'
    }
  ];

  return (
    <CommunityContainer id="community">
      <SectionTitle>Join Our Community</SectionTitle>
      <CommunityContent>
        <CommunityInfo
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <CommunityTitle>Be a Part of Something Epic</CommunityTitle>
          <CommunityDescription>
            Join our thriving community of Dragon Ball fans and gamers from around the world. 
            Participate in tournaments, share strategies, showcase your achievements, and make 
            new friends who share your passion.
          </CommunityDescription>
          
          <StatsCounter>
            <CounterItem>
              <CounterValue>500K+</CounterValue>
              <CounterLabel>Community Members</CounterLabel>
            </CounterItem>
            <CounterItem>
              <CounterValue>120+</CounterValue>
              <CounterLabel>Countries</CounterLabel>
            </CounterItem>
            <CounterItem>
              <CounterValue>50+</CounterValue>
              <CounterLabel>Events</CounterLabel>
            </CounterItem>
          </StatsCounter>
          
          <SocialIcons>
            <SocialIcon 
              href="#" 
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              📱
            </SocialIcon>
            <SocialIcon 
              href="#" 
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              💬
            </SocialIcon>
            <SocialIcon 
              href="#" 
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              📸
            </SocialIcon>
            <SocialIcon 
              href="#" 
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              📺
            </SocialIcon>
          </SocialIcons>
          
          <JoinForm
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FormGroup>
              <FormLabel>Email Address</FormLabel>
              <FormInput 
                type="email" 
                placeholder="Enter your email" 
              />
            </FormGroup>
            <SubmitButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
            >
              Subscribe to Newsletter
            </SubmitButton>
          </JoinForm>
        </CommunityInfo>
        
        <CommunityImages
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {communityImages.map((image, index) => (
            <CommunityImage
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              <img src={image.image} alt={image.title} />
            </CommunityImage>
          ))}
        </CommunityImages>
      </CommunityContent>
    </CommunityContainer>
  );
};

export default CommunitySection; 