var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//     render: function(){
//         return (
//             <div>
//             <Nav/>
//             <h2>Main Component</h2>
//             {this.props.children}
//             </div>
//         )
//     }
// });

var Main = (props) => {
    return (
            <div>
            <Nav/>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                                <div className="grid-x grid-padding-x">
                                    <div className="medium-4 cell"></div>
                                    <div className="medium-4 small-12 cell">
                                        {props.children}
                                    </div>
                                    <div className="medium-4 cell"></div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

module.exports = Main;
