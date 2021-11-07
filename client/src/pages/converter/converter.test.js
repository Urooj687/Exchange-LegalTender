import React from 'react'
import { render } from '@testing-library/react'
import { StoreProvider } from 'easy-peasy'
import { store } from "../../shared/store/store";
import {Converter} from '../converter/converter'
test('predict correct values of conversion', () => {
  const app = (
    <StoreProvider store={store}>
      <Converter />
    </StoreProvider>
  )

  // act
  const { getByTestId, getByText } = render(app)

  // assert
  expect(getByTestId("out").textContent).toEqual('');

  // act
  store.getActions().upSetOutput("10 EUR")

  // assert
  expect(getByTestId("out").textContent).toEqual("10 EUR")

})