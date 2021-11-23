import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import CardList from '../card-list';

const mockStore = configureMockStore();
const store = mockStore({});
it("render CardList", () => {
  render(<Provider 
    store={store}>
      <CardList />
    </Provider>)
})