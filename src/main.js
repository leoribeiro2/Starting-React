/**
 * Created by leonardoribeiro on 12/26/16.
 */

let data = [
    {id: "1", name: "Maria", email: "maria@mail.com", subject: "r", messenger: "My messenger test 1 ..."},
    {id: "1", name: "Pedro", email: "pedro@mail.com", subject: "a", messenger: "My messenger test 2 ..."}
];

let Page = React.createClass({
    getInitialState: function () {
        return {
            data: [
                {id: "1", name: "Maria", email: "maria@mail.com", subject: "r", messenger: "My messenger test 1 ..."},
                {id: "2", name: "Pedro", email: "pedro@mail.com", subject: "a", messenger: "My messenger test 2 ..."}
            ]
        }
    },
    handleContactSubmit: function (contact) {
        console.log(contact);
        let newContacts = this.state.data.concat([contact]);
        this.setState({data: newContacts});
    },
    render: function () {
        return (
            <myElement>
                <Nav title="React" linkUrl="index.html"/>
                <div className="container">
                    <Title>My component title!</Title>
                    <Form onContactSubmit={this.handleContactSubmit} idNumber={this.state.data.length + 1} />
                    <div className="row">
                        <List data={this.state.data} />
                        <br/><br/><br/>
                    </div>
                </div>
            </myElement>
        )
    }
});

ReactDOM.render(
    <Page/>,
    document.getElementById('page')
);