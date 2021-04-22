class Bulb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        };

        this.changeStatus = this.changeStatus.bind(this);
    }

    changeStatus() {
        this.setState({
            status: !this.state.status
        });
    }

    render() {
        var dispBulb = this.state.status ? 'images/on.jpg' : 'images/off.jpg';
        return (
            <div>
                <img src={this.state.status ? 'images/on.jpg' : 'images/off.jpg'} width="200" height="200" />
                <button onClick={this.changeStatus}>Click me</button>
            </div>
        );
    }

}

ReactDOM.render(<Bulb />, document.getElementById('mydiv'))


/* class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback    
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({ isToggleOn: !state.isToggleOn }));
    }
    render() {
        return (
            <div>
                <img src={this.state.isToggleOn ? 'images/on.jpg' : 'images/off.jpg'} width="200" height="200" />
                <button onClick={this.handleClick}>  Toggle Bulb
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('mydiv')); */