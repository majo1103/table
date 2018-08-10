import React from "react";
import {
  render,
  waitForElement,
  cleanup,
  fireEvent
} from "react-testing-library";
// this adds custom expect matchers
import "jest-dom/extend-expect";
// the mock lives in a __mocks__ directory
import axios from "axios";
import { Fetch } from "../services/Fetch";

jest.mock("axios");
afterEach(cleanup);

test("displays greeting when clicking Load Greeting", async () => {
  // Arrange
  axios.get.mockResolvedValueOnce(({ name }) =>
    Promise.resolve({
      data: { greeting: "Hello there" }
    })
  );
  const { getByText, getByTestId, container } = render(<Fetch />);
  // Act
  fireEvent.click(getByText("Load Greeting"));
  // let's wait for our mocked `get` request promise to resolve
  // wait will wait until the callback doesn't throw an error
  const greetingTextNode = await waitForElement(() =>
    getByTestId("greeting-text")
  );
  // Assert
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(url);
  // here's a custom matcher!
  expect(getByTestId("greeting-text")).toHaveTextContent("Hello there");
  // snapshots work great with regular DOM nodes!
  expect(container.firstChild).toMatchSnapshot();
});
