import React from "react";
import {AnswerObject} from '../App'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';


interface Props {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) =>void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
}

export const QuestionCard = (props: Props) => {
  return ( 
      <Wrapper>
      <p className="number">
        Question: {props.questionNr} / {props.totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: props.question }} />
      <div>
        {props.answers.map((answer) => (

          <ButtonWrapper key={answer}
          correct={props.userAnswer?.correctAnswer === answer}
          userClicked={props.userAnswer?.answer === answer}
          >
            <button disabled={!!props.userAnswer}  value={answer } onClick={props.callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
