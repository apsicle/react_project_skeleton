class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {
        try {
            const countData = JSON.parse(localStorage.getItem('count'))
            const count = parseInt(JSON.parse(countData))

            if ( count && !isNaN(count) ) {
                this.setState(() => ({ count }))
            }
        } catch (e) {
            // don't do anything
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne(e) {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne(e) {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset(e) {
        this.setState((prevState) => {
            return {
                count: 0
            };
        });
    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// Above ^^^ React component method
// Below vvv Vanilla JSX version.

// let count = 0;

// const addOne = () => {
//     count++;
//     reRenderApp();
// }
// const minusOne = () => {
//     count--;
//     reRenderApp();
// }
// const reset = () => {
//     count=0;
//     reRenderApp();
// }

// function reRenderApp() {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} className="button-add">+1</button>
//             <button onClick={minusOne} className="button-minus">-1</button>
//             <button onClick={reset} className="button-reset">Reset</button>        
//         </div>    
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// reRenderApp();