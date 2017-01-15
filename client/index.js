import 'babel-polyfill'
import {mount} from 'redom'
import main from '../shared/components/main'



// const app = new Main()

mount(document.body, main)


// setTimeout(() => {
//     app.state = 'asdadasd'
// }, 1000)


// import { listen, dispatch } from '../utils/dispatch';

// export const api = (app, actions) => {
//     const onHash = () => {
//         const hash = location.hash.slice(1).split('/');
//         dispatch(app, 'route', hash);
//     };
//
//     const wrappedActions = {};
//
//     for (let key in actions) {
//         wrappedActions[key] = (data, e) => {
//             const newState = actions[key](app.data, data, e);
//             if (newState) {
//                 app.data = newState;
//                 app.update();
//             }
//         };
//     }
//
//     listen(app, wrappedActions);
//
//     window.addEventListener('hashchange', onHash);
//
//     app.startRoute = onHash;
// }


//
//
// import { mount } from 'redom';
// import { App } from './app';
// import { api } from './utils/api';
//
// import actions from './actions';
// import data from './data';
//
// const app = new App(data);
//
// mount(document.body, app);
//
// api(app, actions(app));
//
// app.recoverData();
// app.startRoute();