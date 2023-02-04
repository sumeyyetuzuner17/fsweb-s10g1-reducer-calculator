import React from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import { useReducer } from "react";
import { initialState } from "./reducers";
import reducer from "./reducers";
import { addOne,ADD_ONE,applyNumber, APPLY_NUMBER ,CHANGE_OPERATION,CLEAR_DISPLAY} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const eventHandler = () => {
    dispatch({ type: ADD_ONE });
  };

  function handleNumber (e){
dispatch(applyNumber(e.target.value))
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>{state.operation}</b> X
              </span>
              <span id="memory">
                <b>{state.memory}</b> 0
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  dispatch({ type: ADD_ONE });
                }}
                value={1}
              />
              <CalcButton value={2} onClick={Number((e)=>handleNumber(e))}/>
              <CalcButton value={3} onClick={()=>{
                dispatch({type:APPLY_NUMBER,payload:3})
              }}/>
            </div>

            <div className="row">
              <CalcButton onClick={(e)=>dispatch(applyNumber(Number(e.target.value)))} value={4} />
              <CalcButton value={5} onClick={()=>{
                dispatch({type:APPLY_NUMBER,payload:5})
              }}/>
              <CalcButton value={6} onClick={()=>{
                dispatch({type:APPLY_NUMBER,payload:6})
              }}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=>{
                dispatch({type:APPLY_NUMBER,payload:7})
              }}/>
              <CalcButton value={8} onClick={()=>{
                dispatch({type:APPLY_NUMBER,payload:8})
              }}/>
              <CalcButton value={9} onClick={()=>{
                dispatch({type:APPLY_NUMBER,payload:9})
              }}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>dispatch({type:CHANGE_OPERATION,payload:"+"})}/>
              <CalcButton value={"*"} onClick={()=>dispatch({type:CHANGE_OPERATION,payload:"*"})}/>
              <CalcButton value={"-"} onClick={()=>dispatch({type:CHANGE_OPERATION,payload:"-"})}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
