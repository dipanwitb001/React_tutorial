// creating a very own react element


function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children

    // here, every attribute of the props is added to the DOMelement separately, which is a messy process


    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);

    container.appendChild(domElement);
    */

    // a better way to render the above code, where the attributes are added through a loop
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === reactElement.children) continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

//tree graph 
const reactElement = {
    type: 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')


// render takes all the elements(reactElement) and injects them into the main container
customRender(reactElement, mainContainer)
/*
 function customRender(reactElement, container){: This line defines a function named customRender that takes two parameters: reactElement and container. The reactElement parameter represents a virtual DOM element (a simplified representation of a real DOM element typically used in React), and the container parameter represents the DOM element where the reactElement will be rendered.

     const domElement = document.createElement(reactElement.type);: This line creates a new DOM element using the createElement method of the document object. The type of the DOM element created is determined by the type property of the reactElement parameter.
    
     domElement.innerHTML = reactElement.children: This line sets the inner HTML content of the newly created DOM element to the children property of the reactElement parameter. The children property represents the content that will be displayed inside the DOM element.
    
     domElement.setAttribute('href',reactElement.props.href);: This line sets the href attribute of the newly created DOM element to the value of the href property of the props property of the reactElement parameter. This is typically used for anchor (<a>) elements to specify the URL that the link should navigate to when clicked.
    
     domElement.setAttribute('target',reactElement.props.target);: This line sets the target attribute of the newly created DOM element to the value of the target property of the props property of the reactElement parameter. The target attribute specifies where to open the linked document when the link is clicked. In this case, it's set to _blank, which means the linked document will open in a new tab or window.
    
     container.appendChild(domElement);: This line appends the newly created DOM element (representing the reactElement) as a child of the container element. This effectively renders the reactElement inside the specified container in the actual DOM.
    
     The subsequent code defines a reactElement object representing an anchor (<a>) element with href and target properties, and a children property representing the text content of the anchor. Finally, it selects a container element with the id root from the DOM and renders the reactElement inside it using the customRender function.
*/