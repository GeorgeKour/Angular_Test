var styles = { color: 'red' }
var styles2 = { color: 'black' }

var Header = class extends React.Component {
    render() {
        return (
            <div>
                <h2>This is a Header Component</h2>
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}

var Footer = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "Gk2",
            id: 34
        };
    }

    render() {
        setTimeout(() => {
            this.setState({ id: 10, user: 'Hg3' })
        }, 2000);
        return (
            <div>
                <h2>This is a Footer Component</h2>
                <h4>User is : {this.state.user} with id : {this.state.id}</h4>
            </div>
        )
    }
}

var MyClass1 = class Hello extends React.Component {
    render() {
        return (
            <div style={styles2}>
                <h1 style={styles}>Hello World!</h1>
                <h3>Tutorial</h3>
                <h4>Sum is : {4 + 6}</h4>
                <Header name="Alex" />
                {/* <Header name="Max" /> */}
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<MyClass1 />, document.getElementById('mydiv'))