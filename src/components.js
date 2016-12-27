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
    render: function () {
        let inputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input style={inputStyle} className="form-control" id="name" placeholder="name" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input style={inputStyle} className="form-control" id="email" placeholder="email" type="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select defaultValue="r" className="form-control" name="subject" id="subject">
                        <option value="a">Angular JS</option>
                        <option value="j">Jquery</option>
                        <option value="r">React</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea style={inputStyle} rows="3" className="form-control" id="message" placeholder="message"/>
                </div>
            </form>
        );
    }
});