import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import '@testing-library/jest-dom'

test("renders App without crashing", () => {
  render(<App />);
});

test("contains a first name", () => {
  const { getByText } = render(<App />);

  const firstName = getByText(/first name/i)

  expect(firstName).toBeInTheDocument()
});

test("contains a last name", () => {
  const { getByText } = render(<App />);

  const lastName = getByText(/last name/i)

  expect(lastName).toBeInTheDocument()
});

test("contains an email field", () => {
  const { getByText } = render(<App />);

  const email = getByText(/email/i)

  expect(email).toBeInTheDocument()
});

test("contains a message", () => {
  const { getByText } = render(<App />);

  const message = getByText(/message/i)

  expect(message).toBeInTheDocument()
});

test("contains a submit button", () => {
  const { getByText } = render(<App />);

  const submitButton = getByText( /submit/i )

  expect(submitButton).toBeInTheDocument()
});