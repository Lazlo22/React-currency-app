import React from 'react';

const inp_text = "enter the sum in USD",
     but_text = 'to EUR';

export default class Convert extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            summ : undefined,
            result : undefined
        }
    }
    getCalculation = async (e) => {
        e.preventDefault();
        const sum = e.target.elements.suma.value;
        if(sum){
                const res = (Math.floor(this.props.euro * 100) / 100) * sum;
                this.setState({summ : sum , result : res})
        } else {
            this.setState({summ : undefined , result : undefined})
        }
}
    render(){
        return(
        <div>
            <form onSubmit={this.getCalculation}>
                <input name="suma" className="sum" placeholder={inp_text.toUpperCase()} />
                <button className="cur-btn">{but_text.toUpperCase()}</button>
                <div name="reslt" className="cur-conv">{this.state.result} EUR</div>
            </form>
        </div>
        )
    }
}