import React from 'react';
import Home from './home';
import Currency from './currencies';
import Convert from './convert';
import {Route , Switch} from 'react-router-dom';

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            EUR : '',
            GBP : '',
            JPY : '',
            RUB : '',
            CHF : '',
            AUD : '',
            CZK : '',
            ILS : '',
            CAD : '',
            HKD : '',
            BRL : '',
            CNY : ''
        }
    }

    getCurrency = () => {
            fetch('https://api.exchangeratesapi.io/latest?base=USD')
            .then((resp) => resp.json())
            .then((data) =>   this.setState( {
                                EUR : data.rates.EUR,
                                GBP : data.rates.GBP,
                                JPY : data.rates.JPY,
                                RUB : data.rates.RUB,
                                CHF : data.rates.CHF,
                                AUD : data.rates.AUD,
                                CZK : data.rates.CZK,
                                ILS : data.rates.ILS,
                                CAD : data.rates.CAD,
                                HKD : data.rates.HKD,
                                BRL : data.rates.BRL,
                                CNY : data.rates.CNY
                            })
            )
    }

    componentDidMount() {
        this.getCurrency();
    }

    render(){
        return(
            <div className ="container-main">
                <div className="main-content">
                    <Switch>
                        <Route exact path="/" render={ () => (<Home />)} />
                        <Route path="/home" render={ () => (<Home />)} />
                        <Route path="/currencies" render={ () => (<Currency euro={this.state.EUR}
                                                                            pound={this.state.GBP}
                                                                            yen={this.state.JPY}
                                                                            ruble={this.state.RUB}
                                                                            frank={this.state.CHF}
                                                                            dollar={this.state.AUD}
                                                                            krona={this.state.CZK}
                                                                            israel={this.state.ILS}
                                                                            canadianD={this.state.CAD}
                                                                            hong={this.state.HKD}
                                                                            brasil={this.state.BRL}
                                                                            china={this.state.CNY} />)} />
                        <Route path="/convert" render={ () => (<Convert euro={this.state.EUR} />)} />
                     </Switch>
                </div>
            </div>
        )
    }
}