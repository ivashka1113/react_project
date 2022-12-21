import React from "react";
import styled from "styled-components";

const ChoicesWrap = styled.div`
  column-count: 2;
  max-width: 500px;
  margin: 0px auto 20px;
  column-gap: 15px;
`;

const ChoicesLabel = styled.label`
  cursor: pointer;
  display: block;
`;

const ChoicesRadio = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;

export const Choices = ({ openItem, choice, changeChoices }) => {
  return (
    <div>
      <h3>Выбирайте:</h3>
      <ChoicesWrap>
        {openItem.choices.map((item, i) => {
          return (
            <ChoicesLabel key={i}>
              <ChoicesRadio
                type="radio"
                name="choices"
                checked={choice === item}
                onChange={changeChoices}
                value={item}
              />
              {item}
            </ChoicesLabel>
          );
        })}
      </ChoicesWrap>
    </div>
  );
};
