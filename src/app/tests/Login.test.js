import { Login } from "../components/login/Login";
import React from "react";
import { render } from "react-testing-library";

it("should have the `button` element", () => {
  const wrapper = render(<Login />);
  expect(wrapper).toMatchSnapshot();
});
