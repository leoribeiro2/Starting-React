/**
 * Created by leonardoribeiro on 12/26/16.
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
        return (
          <div className="container">
              <div className="row">
                  <h1>{ this.props.title }</h1>
              </div>
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
        let title =  this.state.click ? this.props.textActive : this.props.title;
        return (
            <button onClick={this.toggleClick} className={btnClass}>{title}</button>
        );

    }
});

ReactDOM.render(
    <Nav title="React" linkUrl="index.html"/>,
    document.getElementById('nav')
);

ReactDOM.render(
    <Title title="My component title!"/>,
    document.getElementById('title')
);

ReactDOM.render(
    <Button title="My Button" textActive="Loading..."/>,
    document.getElementById('button')
);