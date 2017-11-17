import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese'


export class CheeseList extends React.Component {

    
    componentDidMount() {
        this.props.dispatch(fetchCheeses())
    }
    
        render() {

        const cheeses = this.props.cheeses.map((cheese, index) => (
            
            <li key={index}>{cheese}</li>
            
        )
        )
        // console.log(cheeses);
    return (
        <div className="cheese">
            <ul>
                {cheeses}
            </ul>
        </div>
    )
}
}


// CheeseList.defaultProps = {
//     cheeses: [
//         "Bath Blue",
//         "Barkham Blue",
//         "Buxton Blue"
//     ]
// }

const mapStateToProps = state => ({
    cheeses: state.cheeses,
    loading: state.loading,
    error: state.error
})

export default connect(mapStateToProps)(CheeseList);