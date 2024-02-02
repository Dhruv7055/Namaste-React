const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am an h1 tag'),
    React.createElement('h1', {}, 'I am an h1 tag'),
  ])
);

const heading = React.createElement(
  // it is creating an object
  // props are children + attribute
  'h1',
  { id: 'heaidng', xyz: 'abc' }, // attribute
  'Hello World from React' // children
); // tag,  empty object and content

// console.log(heading); // object is logged in console
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

root.render(parent);
