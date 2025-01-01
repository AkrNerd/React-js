// Manipulate the HTML DOM using Javscript

// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

const heading = React.createElement('h1',
    {helloe : "bro", id:"title",
    style:{
        background:"pink",
        color:"white"
    }},
    "Hola"
    );

    const heading2= React.createElement('h1',{
        id:"tilte",
        style:{
            background:"lightblue",
            color:"yellow"
        }
    },"John"    );

    const container = React.createElement('div',null, [heading, heading2] );

    

    //- create root using createRoot 
    const root = ReactDOM.createRoot(document.getElementById("roots"))

    //- Passing react element inside root 
    root.render(container);