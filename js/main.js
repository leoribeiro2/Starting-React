/**
 * Created by leonardoribeiro on 12/26/16.
 */

let Page = React.createClass({
    displayName: "Page",

    render: function () {
        return React.createElement(
            "myElement",
            null,
            React.createElement(Nav, { title: "React", linkUrl: "index.html" }),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    Title,
                    null,
                    "My component title!"
                ),
                React.createElement(Form, null),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        Button,
                        { textActive: "Loading..." },
                        "Send"
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));