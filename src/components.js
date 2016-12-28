/**
 * Created by djleo on 27/12/2016.
 */

let Nav = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a href={ this.props.linkUrl } className="navbar-brand">
                            { this.props.title }
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
});

let Title = React.createClass({
    render: function () {
        let titleStyle = {
            color: "#777676",
            fontSize: "50px"
        };
        return (
            <div className="row">
                <h1 style={titleStyle}>{ this.props.children }</h1>
            </div>
        );

    }
});

let Button = React.createClass({

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
        let title =  this.state.click ? this.props.textActive : this.props.children;
        return (
            <button onClick={this.toggleClick} className={btnClass}>{title}</button>
        );

    }
});

let Form = React.createClass ({
    getInitialState: function () {
        return {name: '', email:'', subject:'r', messenger:''}
    },
    handleNameChange: function (e) {
        this.setState({name: e.target.value});
    },
    handleEmailChange: function (e) {
        this.setState({email: e.target.value});
    },
    handleSubjectChange: function (e) {
        this.setState({subject: e.target.value});
    },
    handleMessegerChange: function (e) {
        this.setState({messenger: e.target.value});
    },
    handleSubmit: function (e) {
        e.preventDefault();
        let name = this.state.name.trim();
        let email = this.state.email.trim();
        let subject =  this.state.subject.trim();
        let messenger = this.state.messenger.trim();
        if(!name || !email || !subject || !messenger){
            return;
        }
        this.props.onContactSubmit({
            id: this.props.idNumber,
            name: name,
            email: email,
            subject: subject,
            messenger: messenger
        })
    },
    render: function () {
        let inputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input style={inputStyle} className="form-control" onChange={this.handleNameChange} placeholder="name" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input style={inputStyle} className="form-control" onChange={this.handleEmailChange} placeholder="email" type="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select defaultValue={this.state.subject} className="form-control" name="subject" onChange={this.handleSubjectChange}>
                        <option value="a">Angular JS</option>
                        <option value="j">Jquery</option>
                        <option value="r">React</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="messenger">Messenger</label>
                    <textarea style={inputStyle} rows="3" className="form-control" id="messenger" placeholder="messenger" onChange={this.handleMessegerChange}/>
                </div>
                <div className="row"><Button textActive="Loading...">Send</Button></div>
            </form>
        );
    }
});

let Contact = React.createClass ({
    render: function () {
        return (
            <tr>
                <th scope="row">{this.props.idNumber}</th>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.subject}</td>
                <td>{this.props.children}</td>
            </tr>
        )
    }
});

let List = React.createClass ({
    render : function () {
        let contactNodes = this.props.data.map(function (contact) {
            return (<Contact idNumber={contact.id} name={contact.name} email={contact.email} subject={contact.subject} >
                {contact.messenger}
            </Contact>)
        });
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Messenger</th>
                </tr>
                </thead>
                <tbody>
                {contactNodes}
                </tbody>
            </table>
        );
    }
});