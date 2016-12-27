/**
 * Created by djleo on 27/12/2016.
 */

let Nav = React.createClass({
    displayName: "Nav",

    render: function () {
        return React.createElement(
            "nav",
            { className: "navbar navbar-inverse" },
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "navbar-header" },
                    React.createElement(
                        "a",
                        { href: this.props.linkUrl, className: "navbar-brand" },
                        this.props.title
                    )
                )
            )
        );
    }
});

let Title = React.createClass({
    displayName: "Title",

    render: function () {
        let titleStyle = {
            color: "#777676",
            fontSize: "50px"
        };
        return React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "h1",
                { style: titleStyle },
                this.props.children
            )
        );
    }
});

let Button = React.createClass({
    displayName: "Button",


    getInitialState: function () {
        return {
            click: false
        };
    },

    toggleClick: function () {
        this.setState({
            click: !this.state.click
        });
    },

    render: function () {
        let btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-success';
        let title = this.state.click ? this.props.textActive : this.props.children;
        return React.createElement(
            "button",
            { onClick: this.toggleClick, className: btnClass },
            title
        );
    }
});

let Form = React.createClass({
    displayName: "Form",

    render: function () {
        let inputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };
        return React.createElement(
            "form",
            null,
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "name" },
                    "Name"
                ),
                React.createElement("input", { style: inputStyle, className: "form-control", id: "name", placeholder: "name", type: "text" })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "email" },
                    "Email"
                ),
                React.createElement("input", { style: inputStyle, className: "form-control", id: "email", placeholder: "email", type: "email" })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "subject" },
                    "Subject"
                ),
                React.createElement(
                    "select",
                    { defaultValue: "r", className: "form-control", name: "subject", id: "subject" },
                    React.createElement(
                        "option",
                        { value: "a" },
                        "Angular JS"
                    ),
                    React.createElement(
                        "option",
                        { value: "j" },
                        "Jquery"
                    ),
                    React.createElement(
                        "option",
                        { value: "r" },
                        "React"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "message" },
                    "Message"
                ),
                React.createElement("textarea", { style: inputStyle, rows: "3", className: "form-control", id: "message", placeholder: "message" })
            )
        );
    }
});