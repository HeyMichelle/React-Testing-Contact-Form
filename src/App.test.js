import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});



test('all required fields to show on screen', () => {
  render(<ContactForm />)

  expect(screen.getByTestId('firstNameInput')).toBeVisible();
  expect(screen.getByTestId('lastNameInput')).toBeVisible();
  expect(screen.getByTestId('emailInput')).toBeVisible();
  expect(screen.getByTestId('textInput')).toBeVisible();
});



test("check that elements start with empty input", () => {
  const wrapper = render(<App />);

  expect(wrapper.getByTestId('firstNameInput')).not.toHaveValue();
  expect(wrapper.getByTestId('lastNameInput')).not.toHaveValue();
  expect(wrapper.getByTestId('emailInput')).not.toHaveValue();
  expect(wrapper.getByTestId('textInput')).not.toHaveValue();
});



test('does text in firstNameInput field match user text input', () => {
  const wrapper = render(<App />);

  fireEvent.change((screen.getByTestId('firstNameInput')), { target: { value: 'Testing firstName input field' } })
  expect((screen.getByTestId('firstNameInput')).value).toBe('Testing firstName input field')
});

