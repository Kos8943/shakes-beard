import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";


export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm d-lg-none d-xs-block">
      <div className="d-flex justify-content-center">
          
          <div className=" cardkko">
          <form>
            <p>信用卡卡號:</p>
            <input
              type="tel"
              name="number"
              placeholder="卡號"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              style={{height: "34px", width: "100%",  border:"1px solid #2D3B72" , "border-radius": "4px", marginBottom:"10px"}}
            />
            <p>姓名:</p>
            <input
              type="tel"
              name="name"
              placeholder="持卡人姓名"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              style={{height: "34px", width: "100%",  border:"1px solid #2D3B72" , "border-radius": "4px", marginBottom:"10px"}}
            />
            <p>有效期限:</p>
            <input
              type="tel"
              name="expiry"
              placeholder="有效期限"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              style={{height: "34px", width: "100%",  border:"1px solid #2D3B72" , "border-radius": "4px", marginBottom:"10px"}}
            />
            <p>檢核碼:</p>
            <input
              type="tel"
              name="cvc"
              placeholder="卡背後3碼"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              style={{height: "34px", width: "100%",  border:"1px solid #2D3B72" , "border-radius": "4px", marginBottom:"10px"}}
            />
             </form>
          </div>
       
        <div className="col-3">
            <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        </div>
      </div>
        
        
      </div>
    );
  }
}
