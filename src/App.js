import React, {useEffect} from "react" 
import { useSelector, useDispatch } from "react-redux"
import { fetchPost } from "./Redux/actions/post.actions"

const App = () => {
  // let loading = useSelector(state => state.loading)
  let data = useSelector(state => state.data)
  let error = useSelector(state => state.error)

  const dispatch = useDispatch() 

    useEffect(() =>{
         dispatch(fetchPost())
    } ,[]
    )
    // if(loading){
    //   return <h1>Loading...</h1>
    // }

    if(error){
      return <h1>{error}</h1>
    }

    return (
      <div className="app-container">
        <h1 className="app-heading">Post List</h1>
        <div className="grid-container">
          {data.map((post) => (
            <div key={post.id} className="post-container">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default App