import React from "react";
import Button from "./components/Button";
import "./App.css"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={  
      current:'0',
      previous:[]
      ,IsNextReset:false
    };
  }
  reset=()=>{
    this.setState({ current: "0", previous: [], IsNextReset: false });
  }
  addToCurrent=(symbol)=>{
    if(["/","-","*","+"].indexOf(symbol) > -1){
      let {previous} = this.state;
      previous.push(this.state.current+symbol)
      this.setState({ previous, IsNextReset :true});
    }
    else{
      if ((this.state.current === "0" && symbol !== ".") ||  this.state.IsNextReset) {
        this.state.IsNextReset = false;
        this.setState({ current: symbol});
      } else {
        this.setState({ current: this.state.current + symbol});
      }
    }
  }
  calculate=(symbol)=>{
    let {current,isNextReset,previous}=this.state;
    if(previous.length>0){
      current = eval(previous[previous.length-1] + current);
      this.setState({ current,previous:[],isNextReset:true});
    }
    else{
      current = eval(current);
      this.setState({ current, previous: [], isNextReset: true });
    }
  }
  render() {{
    const buttons = [
      { symbol: "c", cols: 3, action: this.reset },
      { symbol: "/", cols: 1, action: this.addToCurrent },
      { symbol: "7", cols: 1, action: this.addToCurrent },
      { symbol: "8", cols: 1, action: this.addToCurrent },
      { symbol: "9", cols: 1, action: this.addToCurrent },
      { symbol: "*", cols: 1, action: this.addToCurrent },
      { symbol: "4", cols: 1, action: this.addToCurrent },
      { symbol: "5", cols: 1, action: this.addToCurrent },
      { symbol: "6", cols: 1, action: this.addToCurrent },
      { symbol: "-", cols: 1, action: this.addToCurrent },
      { symbol: "1", cols: 1, action: this.addToCurrent },
      { symbol: "2", cols: 1, action: this.addToCurrent },
      { symbol: "3", cols: 1, action: this.addToCurrent },
      { symbol: "+", cols: 1, action: this.addToCurrent },
      { symbol: "0", cols: 2, action: this.addToCurrent },
      { symbol: ".", cols: 1, action: this.addToCurrent },
      { symbol: "=", cols: 1, action: this.calculate },
    ];
      return (
        <div className="App">
          {
            (this.state.previous.length > 0)?
              <div className="floaty-last">
                {this.state.previous[this.state.previous.length - 1]}
              </div>
              :null
          }
          <input type="text" className="result" readOnly={true} value={this.state.current} />
          {buttons.map((btn, i)=>{
            return (<Button symbol={btn.symbol} key={i} cols={btn.cols} action={(symbol)=>btn.action(symbol)}/>);
          })}
        </div>
      );
  }}
}

export default App;
