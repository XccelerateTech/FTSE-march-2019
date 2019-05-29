import * as React from 'react';
import ShoppingList from '../components/ShoppingList'
import GoBack from '../components/GoBack'
import { logoutNow } from '../redux/auth/actions'
import { connect } from 'react-redux'

export  class ShoppingListPage extends React.Component {
    logout = () => {
        this.props.logout()
    }
    render() {

        const shopping = [
            { id: 0, item: "Apples" },
            { id: 1, item: "Minced Pork" },
            { id: 2, item: "Eggs" },
            { id: 3, item: "Flour" }]
        return (
            <div>

                <button onClick={this.logout}>Now you can Logout</button>

                <GoBack />
                <ShoppingList name="Sam" list={shopping} />
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
export default connect(null, mapDispatchToProps)(ShoppingListPage)

