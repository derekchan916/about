import './stylesheets/_styleguide.scss';
import React from 'react';
import ReactDOM from 'react-dom';

var MyComponent = React.createClass({
    render() {
        return(
            <div className="Index">Hello World</div>
        );
    }
});

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
