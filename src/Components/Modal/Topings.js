import styled from "styled-components";
import React from "react";

const TopingWrap = styled.div`
  column-count: 2;
  max-width: 500px;
  margin: 0px auto 20px;
  column-gap: 15px;
`;

const TopingLabel = styled.label`
  cursor: pointer;
  display: block;
`;

const TopingCheckbox = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;

export const Topings = ({ toppings, checkToppings }) => {
  return (
    <div>
      <h3>Добавки</h3>
      <TopingWrap>
        {toppings.map((item, i) => {
          return (
            <TopingLabel key={i}>
              <TopingCheckbox
                type="checkbox"
                checked={item.checked}
                onChange={() => checkToppings(i)}
              />
              {item.name}
            </TopingLabel>
          );
        })}
      </TopingWrap>
    </div>
  );
};
