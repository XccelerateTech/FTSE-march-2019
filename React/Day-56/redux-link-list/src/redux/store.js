import { createStore } from "redux";

const rootReducer = state => {
  return {
    links: [
      { title: "Google", url: "https://www.google.com" },
      { title: "Yahoo", url: "https://www.yahoo.com" },
      { title: "Facebook", url: "https://www.facebook.com" },
      { title: "HKO", url: "https://www.hko.gov.hk" },
      { title: "DuckDuckGo", url: "https://www.duckduckgo.com" }
    ],

    // Exercise A
    users: [
      { firstName: "Timmy", lastName: "Smith", age: 25, occupation: "Writer" },
      { firstName: "Jane", lastName: "Doe", age: 32, occupation: "Developer of Software" },
      { firstName: "Amanda", lastName: "Keith", age: 44, occupation: "Dancer" },
      { firstName: "Sally", lastName: "Herman", age: 21, occupation: "Artist" },

    ]
  };
};

export const store = createStore( rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// import {createStore} from "redux";
// import { rootReducer } from "./reducers"

// export const store = createStore( rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );