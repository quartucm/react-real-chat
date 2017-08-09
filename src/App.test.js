import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StaticRouter from 'react-router';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });


// test('Link matches snapshot', () => {
//   const component = renderer.create(
//     <StaticRouter location="/364020540" context={context}>
//       <App />
//     </StaticRouter>
//   );

//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });