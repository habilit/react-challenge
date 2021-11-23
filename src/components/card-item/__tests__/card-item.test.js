import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import CardItem from '../card-item';

const mockItem = {
  id: 1,
  name: "Habitat for Humanity Thailand",
  image: "habitat-for-humanity-thailand.jpg",
  currency: "THB"
};

const mockStore = configureMockStore();
const store = mockStore({});
it("render CardItem", () => {
  render(<Provider 
    store={store}>
      <CardItem 
        key={1} 
        index={1} 
        item={mockItem}>  
      </CardItem>
    </Provider>)
})