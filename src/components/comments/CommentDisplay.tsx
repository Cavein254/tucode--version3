import Moment from "react-moment";
import Viewer from "../editor/Viewer";
const CommentDisplay = ({comments}) => {
    return (
        <div>
        {
          comments.map(({body, createdAt})=>(
            <>
           <div className="flex justify-between">
            <div></div>
            <div></div>
            <div className="flex flex-col justify-start items-right">
            <div>
                <Viewer data={body} />
                </div>
                <div className="text-gray-400 text-xs">
                    <Moment fromNow>{createdAt}</Moment>
                </div>
            </div>
              
           </div>
              
            </>
          ))
        }
      </div>
    )
}

export default CommentDisplay;

