import { GetServerSideProps } from "next";
import { GetAllAnswers } from "../../pages/api/apiActions";

const AnswerDisplay = ({answers}) => {
  console.log(typeof answers)
  answers.map(answer => {
    console.log(answer.answer_id)
  })
    return (
      <h1>Answers</h1>
    )
}

export default AnswerDisplay;

export const getServerSideProps: GetServerSideProps = async () => {
    const data = GetAllAnswers()
    const answers = JSON.stringify(data);
    return {
      props: {
        answers,
      },
    };
  };