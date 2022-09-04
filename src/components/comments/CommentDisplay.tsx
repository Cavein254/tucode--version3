import Moment from "react-moment";
import Viewer from "../editor/Viewer";
const CommentDisplay = ({comments}) => {
    return (
        <div>
        {
          comments.map(({body, createdAt,comment_id})=>(
            <div key={comment_id}>
           <div className="flex">
            <div className="justify-start items-center">
                <Viewer data={body} />
                </div>
                <div className="text-gray-400 text-xs font-thin">
                    <Moment fromNow>{createdAt}</Moment>
                </div>
              
           </div>
              
            </div>
          ))
        }
      </div>
    )
}

export default CommentDisplay;

