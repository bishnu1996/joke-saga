import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Action from "../../Store/action";
import "./style.css";

const Joke = () => {
  const entireStore = useSelector((state) => state);
  console.log("entireStore :", entireStore);

  const joke = useSelector((state) => state.joke);
  const dispatch = useDispatch();

  const onGetAnotherJoke = () => {
    dispatch({ type: Action.FETCH_REQUEST });
  };
  
  useEffect(() => {
    dispatch({ type: Action.FETCH_REQUEST });
  }, []);
  return (
    <div className="container">
      <h3>Don't Laugh Challenge</h3>
      <div className="joke">{joke}</div>
      <button className="btn" onClick={onGetAnotherJoke}>
        Get Another Fact
      </button>
    </div>
  );
};
export default Joke;
