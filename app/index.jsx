const React = require('react');
const ReactDOM = require('react-dom');

import './index.scss';

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
