import { motion } from 'framer-motion';
import styled from 'styled-components';
import SectionTitle from '../ui/SectionTitle';

const NewsContainer = styled.div`
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const NewsCard = styled(motion.div)`
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

const NewsImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${NewsCard}:hover & {
    transform: scale(1.1);
  }
`;

const NewsContent = styled.div`
  padding: 1.5rem;
`;

const NewsDate = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  color: #FFA500;
  margin-bottom: 0.5rem;
`;

const NewsTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: white;
`;

const NewsExcerpt = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const NewsLink = styled.a`
  display: inline-block;
  color: #FFA500;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #FFA500;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      image: 'https://i.ytimg.com/vi/5S3o2fwBm9M/maxresdefault.jpg',
      date: 'August 15, 2023',
      title: 'Season 2 Update Coming Soon',
      excerpt: 'Get ready for our massive Season 2 update bringing new characters, stages, and gameplay improvements.'
    },
    {
      id: 2,
      image: 'https://i.ytimg.com/vi/bNEnQyznuck/hqdefault.jpg',
      date: 'July 28, 2023',
      title: 'Global Tournament Results',
      excerpt: 'Congratulations to the winners of our first global tournament! Check out the highlights and upcoming competitions.'
    },
    {
      id: 3,
      image: 'https://i.ytimg.com/vi/K8rR24EQWL4/maxresdefault.jpg',
      date: 'July 10, 2023',
      title: 'New Character Spotlight: Broly',
      excerpt: 'Learn about the latest addition to our roster - the legendary Super Saiyan Broly and his unique moveset.'
    }
  ];
  
  return (
    <NewsContainer id="news">
      <SectionTitle>Latest News</SectionTitle>
      <NewsGrid>
        {newsItems.map((item, index) => (
          <NewsCard 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <NewsImageWrapper>
              <NewsImage src={item.image} alt={item.title} />
            </NewsImageWrapper>
            <NewsContent>
              <NewsDate>{item.date}</NewsDate>
              <NewsTitle>{item.title}</NewsTitle>
              <NewsExcerpt>{item.excerpt}</NewsExcerpt>
              <NewsLink href="#">Read More</NewsLink>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </NewsContainer>
  );
};

export default NewsSection; 