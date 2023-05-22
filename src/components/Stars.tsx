import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { FC } from 'react';

interface StarsProps {
  stars: string | number;
  reviews: number;
}

const Stars: FC<StarsProps> = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {Number(stars) >= index + 1 ? (
          <BsStarFill />
        ) : Number(stars) >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{tempStars}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
