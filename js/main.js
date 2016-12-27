/**
 * Created by leonardoribeiro on 12/26/16.
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
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                )
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
        let title = this.state.click ? this.props.textActive : this.props.title;
        return React.createElement(
            "button",
            { onClick: this.toggleClick, className: btnClass },
            title
        );
    }
});

ReactDOM.render(React.createElement(Nav, { title: "React", linkUrl: "index.html" }), document.getElementById('nav'));

ReactDOM.render(React.createElement(Title, { title: "My component title!" }), document.getElementById('title'));

ReactDOM.render(React.createElement(Button, { title: "My Button", textActive: "Loading..." }), document.getElementById('button'));