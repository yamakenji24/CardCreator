import { render } from '@testing-library/react';
import { SignIn } from '../ui/SignIn/signIn';

describe("GitHub (OAuth 2.0 flow)", () => {
  test("should render button and mouse event when provider==github", () => {
    render(<SignIn provider="github"/>)
  })
})