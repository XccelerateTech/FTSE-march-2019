import * as React from 'react';
import CurrencyConverter from '../components/CurrencyConverter'
import GoBack from '../components/GoBack'


export default class CurrencyPage extends React.Component {
     render(){
        return (
            <div>
                <GoBack />
<CurrencyConverter/>            </div>
        )
    }
}