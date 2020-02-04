import React from 'react' ;

export default function Currency (props){
        return(
            <div className="currency-content">
                <p className="currency-text">These are currencies to 1 USD rates :</p>
                <div className="currency-main-content">
                    <div className="rates">{Math.round(props.euro * 100) / 100} EUR</div>
                    <div className="rates">{Math.round(props.pound * 100) / 100} GBP</div>
                    <div className="rates">{Math.round(props.yen * 100) / 100} JPY</div>
                    <div className="rates">{Math.round(props.ruble * 100) / 100} RUB</div>
                    <div className="rates">{Math.round(props.frank * 100) / 100} CHF</div>
                    <div className="rates">{Math.round(props.dollar * 100) / 100} AUD</div>
                    <div className="rates">{Math.round(props.krona * 100) / 100} CZK</div>
                    <div className="rates">{Math.round(props.israel * 100) / 100} ILS</div>
                    <div className="rates big-phones">{Math.round(props.canadianD * 100) / 100} CAD</div>
                    <div className="rates big-phones">{Math.round(props.hong * 100) / 100} HKD</div>
                    <div className="rates big-phones">{Math.round(props.brasil * 100) / 100} BRL</div>
                    <div className="rates big-phones">{Math.round(props.china * 100) / 100} CNY</div>
                </div>
            </div>
        )
 }