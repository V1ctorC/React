import React, {Component} from "react";

export default class RepLogApp extends Component {
    render() {
        let exclamation = '';
        if (this.props.withExclamation)
        {
            exclamation = <span>!!</span>;
        }

        return (
            <h2>Lift Stuff {exclamation}</h2>
        );
    }
}