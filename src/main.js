/**
 * Created by leonardoribeiro on 12/26/16.
 */

let Page = React.createClass({
    render: function () {
        return (
            <myElement>
                <Nav title="React" linkUrl="index.html"/>
                <div className="container">
                    <Title>My component title!</Title>
                    <Form />
                    <div className="row"><Button textActive="Loading...">Send</Button></div>
                </div>
            </myElement>
        )
    }
});

ReactDOM.render(
    <Page/>,
    document.getElementById('page')
);