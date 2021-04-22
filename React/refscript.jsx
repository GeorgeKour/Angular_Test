class Hello extends React.Component {
    constructor(props) {
        super(props);

        this.display = this.display.bind(this);
    }

    display() {
        var name = this.inputdemo.value;
        document.getElementById('dispName').innerHTML = name;
    }

    render() {
        return (
            <div>
                <h2>Name <input type="text" ref={input => this.inputdemo = input} /></h2>
                <br />
                <button onClick={this.display}>Click me</button>
                <h1>Hi...<span id="dispName"></span></h1>
            </div>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('mydiv'))