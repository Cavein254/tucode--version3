import { GetStaticProps } from "next";
import { GetAllComments } from "../../pages/api/apiActions";

const CommentDisplay = ({comments}) => {
    console.log("comments")
    console.log(comments)
    return (
        <div>All comments here</div>
    )
}

export default CommentDisplay;

export const getStaticProps: GetStaticProps = async () => {
    const comments = GetAllComments()
    console.log('---------------coments--------------')
    console.log(comments)
  
    return {
      props: {
        comments,
      },
    };
  };