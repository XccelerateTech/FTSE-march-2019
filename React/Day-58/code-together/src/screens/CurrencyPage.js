import * as React from 'react';
import CurrencyConverter from '../components/CurrencyConverter'
import GoBack from '../components/GoBack'
import { logoutNow } from '../redux/auth/actions'
import { connect } from 'react-redux'


export class CurrencyPage extends React.Component {
    logout = () => {
        this.props.logout()
    }
     render(){
        return (
            <div>
                <GoBack />
<CurrencyConverter/>            
<button onClick={this.logout}>Now you can Logout</button>

</div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logoutNow())
        }
    }
}
export default connect(null, mapDispatchToProps)(CurrencyPage)