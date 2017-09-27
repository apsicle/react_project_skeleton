// React Components - Reusable ES6 classes to React Components
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    componentDidMount() {
        // Lifecycle method - fires after render
        try {
            const json = localStorage.getItem('options');
            
            if (json) {
                // if there were previously set options, set them.
                const options = JSON.parse(json);
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // do nothing at all, if there was an error in reading
            // the JSON, just default to default options.
        }

    }
    componentDidUpdate(prevProps, prevState) {
        // fires when component changes (doesn't check for 'real' change);
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        // fires when component is about to go away
        console.log('componentWillUnmount');
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }
    handlePickOption() {
        let randNum = Math.floor(Math.random() * this.state.options.length);
        console.log(this.state.options[randNum]);
    }
    handleAddOption(optionText) {
        if (!optionText) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(optionText) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat([optionText]) }));
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Whatever string we want';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action handlePickOption={this.handlePickOption}
                hasOptions={this.state.options.length > 0}/> 
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>  
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePickOption}
                disabled={!props.hasOptions}
            >What should I do?</button>
        </div>
    );
}

// Options 
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            {
                props.options.map((option) => {
                    return <Option 
                    key={option} 
                    option={option} 
                    handleDeleteOption={props.handleDeleteOption}
                    />
                })
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button onClick={(e) => {
                props.handleDeleteOption(props.option)
            }}>Remove</button>
        </div>
    )
}

// AddOption
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.optionText.value.trim();
        const error = this.props.handleAddOption(option); // if no error, this just
        // sets the state properly and returns undefined.

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.optionText.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="optionText"/>
                    <button>Add Option</button>            
                </form>
            </div>
        )
    }
}

//Stateless functional components. Essentially faster if you only need to render stuff
//without any state altering. Can still take props from parents.
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

// In base JSX, we controlled re-rendering by adding the below statement to
// any button that would require the page to re-render.
// When we use React components, the render() methods of the classes are called
// automatically when we change the internal state using the REACT API CALL TO this.setState().
// with 'this' being a React Component instance method.
ReactDOM.render(<IndecisionApp options={['t1','22']}/>, document.getElementById('app'));