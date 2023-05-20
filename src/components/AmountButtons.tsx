import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FC } from 'react';

interface AmountButtonsProps {
  increase: () => void;
  decrease: () => void;
  amount: number;
}

const AmountButtons: FC<AmountButtonsProps> = ({
  increase,
  decrease,
  amount,
}) => {
  return (
    <Wrapper className="amount-btns">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus color="rgba(99, 119, 81, 1)" />
      </button>
      <span className="amount">{amount}</span>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus color="rgba(99, 119, 81, 1)" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 100px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  border-radius: 74rem;
  border: 1px solid rgba(99, 119, 81, 0.44);

  span {
    margin-bottom: 0;
    font-size: 1.2rem;
    border-right: 1px solid rgba(99, 119, 81, 0.7);
    border-left: 1px solid rgba(99, 119, 81, 0.7);
    padding: 0.2rem 9px;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default AmountButtons;
