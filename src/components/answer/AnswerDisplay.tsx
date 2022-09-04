import Moment from "react-moment";
import Viewer from "../editor/Viewer";
const AnswerDisplay = ({answers}) => {

    return (
      <div>
        {
          answers.map(({answer_id,body, createdAt, updatedAt})=>(
            <div key={answer_id}>
             
              <div className="min-w-screen bg-gray-300 p-4 mb-2">
              <div>
              <Viewer data={body} />
              </div>
              <div className="flex flex-row justify-between text-xs">
              <div>Created:<Moment fromNow>{createdAt}</Moment></div>
              <div>Updated: <Moment fromNow>{updatedAt}</Moment></div>
              </div>
              </div>
              
              
            </div>
          ))
        }
      </div>
    )
}

export default AnswerDisplay;

