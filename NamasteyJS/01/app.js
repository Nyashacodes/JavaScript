/**
 * nested html structure in react
 */

const parent = React.createElement(
    "div", 
    {id:"parent"},
    [ 
    React.createElement("div", {id:"child1"},
    [React.createElement("h1", {id:"h1tag"}, "this is h1 tag"),
    React.createElement("h1", {id:"h1tag"}, "this is h1 tag"),
    ]),
    React.createElement("div", {id:"child2"},
    [React.createElement("h1", {id:"h1tag"}, "this is child2h1 tag"),
    React.createElement("h1", {id:"h1tag"}, "this is child2h1 tag"),
    ])
    ]         
);  

const heading = React.createElement("h1",
 {
    id:"heading"
 }, "hi this is h1 tag in react");//takes 3 arg, h1 is created inside react

const root = ReactDOM.createRoot(document.getElementById("root"))//this is root where react will be created

// root.render(heading);
root.render(parent);
console.log(heading);//h1 type objects, having props