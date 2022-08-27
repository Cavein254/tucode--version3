import { GetServerSideProps } from "next";
import { GetAllAnswers } from "../../pages/api/apiActions";

const AnswerDisplay = ({answers}) => {
    console.log("answers")
    console.log(answers)
    return (
        <div>All answers here</div>
    )
}

export default AnswerDisplay;

export const getServerSideProps: GetServerSideProps = async () => {
    const data = GetAllAnswers()
    const answers = JSON.stringify(data);
    console.log(answers)
    return {
      props: {
        answers,
      },
    };
  };