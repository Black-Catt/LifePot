import React from 'react';
import { Suspense } from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import { Loading } from '../components';

const AboutPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Wrapper>
        <PageHero title="about" />
        <Inner className="section section-center">
          <article>
            <div className="title">
              <h2>our story</h2>
              <div className="underline"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                velit earum iure nulla harum, quos officia mollitia nam dolorum
                sint facere commodi nesciunt, rerum facilis incidunt aut, modi
                impedit! Doloremque iure nesciunt porro, libero odit iste ipsa
                cumque pariatur saepe asperiores, totam rem rerum ad voluptatem
                illum, consectetur commodi! Libero.
              </p>
            </div>
          </article>
        </Inner>
      </Wrapper>
    </Suspense>
  );
};

const Wrapper = styled.main`
  background: var(--bg-about) center no-repeat;
`;

const Inner = styled.section`
  min-height: 71.8vh;
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-white);
  }
  .title {
    text-align: center;
    h2 {
      color: var(--clr-white);
    }
  }
`;
export default AboutPage;
