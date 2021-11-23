import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import AlertBar from '../alert-bar';

const mockStore = configureMockStore();
const store = mockStore({});
it("render Alert Bar", () => {
  render(<Provider store={store}><AlertBar/></Provider>)
})