import styled from 'styled-components';

const Loading = () => {
  return (
    <div className="section section-center">
      <Inner>
        <div className="loading"></div>
      </Inner>
    </div>
  );
};

const Inner = styled.div`
  height: 75vh;
`;

export default Loading;
