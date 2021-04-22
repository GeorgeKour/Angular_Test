var MyClass = class Hello extends React.Component {
    render() {
        return <h1>Hello World!</h1>
    }
}

ReactDOM.render(<MyClass />, document.getElementById('mydiv'))