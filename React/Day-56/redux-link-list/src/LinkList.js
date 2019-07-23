import * as React from 'react';
import { connect } from 'react-redux';
// import { ADD_LINK, CLEAR_LINKS} from './redux/actions'
// import { addLink, clearLink } from './redux/actions'



const PureLinkList = props => {
    return (
        <div>
            {/* <button onClick={props.addLink}>New Link</button>
            <button onClick={props.clearLink}>Clear Links</button> */}
            <h2>Links:</h2>
            {props.links.map((l, i) => (
                <div key={i}>
                    {l.title} - {l.url}
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        links: state.links
    };
};


// const mapDispatchToProp = (dispatch) => {
//     return {
//       addLink: () => dispatch({
//         type: ADD_LINK,
//         link: {
//           title: 'Xccelerate',
//           url: 'https://xccelerate.co'
//         }
//       }),
//       clearLink: () => dispatch({
//         type: CLEAR_LINK
//       })
//     }
//   }

// const mapDispatchToProp = dispatch => {
//     return {
//         addLink: () => 
//             dispatch(addLink('Xccelerate', "https://xccelerate.co")),
//             clearLink: ()=>
//             dispatch(clearLink())
//             }
//     }

export const LinkList = connect(mapStateToProps)(PureLinkList)
//export const LinkList = connect(mapStateToProps, mapDispatchToProp)(PureLinkList)