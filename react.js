const root = ReactDOM.createRoot(document.getElementById('root'));
const parent= React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [
                React.createElement("h1",{},"i am h1"),
                React.createElement("h2",{},"i am h2")
            ]
        ),
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h1",{},"i am h1"),
                React.createElement("h2",{},"i am h2")
            ]
        )
    ]);
    root.render(parent);
    console.log(parent)