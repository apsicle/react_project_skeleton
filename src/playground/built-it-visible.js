class VisibilityApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        }

        this.buttonHandler = this.buttonHandler.bind(this);
    }

    buttonHandler() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility App</h1>
                <button onClick={this.buttonHandler}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                <p>{this.state.visibility && "This is some hidden text."}</p> 
            </div>
        )
    }
}

ReactDOM.render(<VisibilityApp />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let textHidden = true;

// const renderText = () => {
//     textHidden = !textHidden
//     renderApp();
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={renderText}>{textHidden ? 'Show details' : 'Hide details'}</button>
    
//             <p>{textHidden || 'This is some text'}</p>
            
    
//         </div>
//     )

//     ReactDOM.render(template, appRoot);
// }

// renderApp();
