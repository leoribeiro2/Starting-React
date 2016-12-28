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

    getInitialState: function () {
        return { name: '', email: '', subject: 'r', messenger: '' };
    },
    handleNameChange: function (e) {
        this.setState({ name: e.target.value });
    },
    handleEmailChange: function (e) {
        this.setState({ email: e.target.value });
    },
    handleSubjectChange: function (e) {
        this.setState({ subject: e.target.value });
    },
    handleMessegerChange: function (e) {
        this.setState({ messenger: e.target.value });
    },
    handleSubmit: function (e) {
        e.preventDefault();
        let name = this.state.name.trim();
        let email = this.state.email.trim();
        let subject = this.state.subject.trim();
        let messenger = this.state.messenger.trim();
        if (!name || !email || !subject || !messenger) {
            return;
        }
        this.props.onContactSubmit({
            id: this.props.idNumber,
            name: name,
            email: email,
            subject: subject,
            messenger: messenger
        });
    },
    render: function () {
        let inputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };
        return React.createElement(
            "form",
            { onSubmit: this.handleSubmit },
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "name" },
                    "Name"
                ),
                React.createElement("input", { style: inputStyle, className: "form-control", onChange: this.handleNameChange, placeholder: "name", type: "text" })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "email" },
                    "Email"
                ),
                React.createElement("input", { style: inputStyle, className: "form-control", onChange: this.handleEmailChange, placeholder: "email", type: "email" })
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
                    { defaultValue: this.state.subject, className: "form-control", name: "subject", onChange: this.handleSubjectChange },
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
                    { htmlFor: "messenger" },
                    "Messenger"
                ),
                React.createElement("textarea", { style: inputStyle, rows: "3", className: "form-control", id: "messenger", placeholder: "messenger", onChange: this.handleMessegerChange })
            ),
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    Button,
                    { textActive: "Loading..." },
                    "Send"
                )
            )
        );
    }
});

let Contact = React.createClass({
    displayName: "Contact",

    render: function () {
        return React.createElement(
            "tr",
            null,
            React.createElement(
                "th",
                { scope: "row" },
                this.props.idNumber
            ),
            React.createElement(
                "td",
                null,
                this.props.name
            ),
            React.createElement(
                "td",
                null,
                this.props.email
            ),
            React.createElement(
                "td",
                null,
                this.props.subject
            ),
            React.createElement(
                "td",
                null,
                this.props.children
            )
        );
    }
});

let List = React.createClass({
    displayName: "List",

    render: function () {
        let contactNodes = this.props.data.map(function (contact) {
            return React.createElement(
                Contact,
                { idNumber: contact.id, name: contact.name, email: contact.email, subject: contact.subject },
                contact.messenger
            );
        });
        return React.createElement(
            "table",
            { className: "table" },
            React.createElement(
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        null,
                        "ID"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Name"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Email"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Subject"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Messenger"
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                contactNodes
            )
        );
    }
});