import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';

import App from './App';

//https://github.com/zalmoxisus/redux-devtools-extension

// reducer чистая функция

 // action {type:}

 // state ->  createStore()


// const reducer = (state=0, action)=>{
//     switch(action.type){
//         case 'INCREMENT':{
          
//             return state+1;
//         }
//         case 'DECREMENT':{
//             return state-1;
//         }
//         default:{
//             return state;
//         }

//     }
// }


 const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe( ()=>{ console.log(store.getState())  }  );
// store.dispatch({type:'INCREMENT'});
// store.dispatch({type:'INCREMENT'});
// store.dispatch({type:'INCREMENT'});


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, 

document.getElementById('root'));

