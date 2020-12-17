import { render } from '@testing-library/react';
import { Grass } from '../ui/card/grass';

describe("<Grass />", () => {
  test("render grass img from existing projects", () => {
    const {asFragment} = render(<Grass provider="github" name="yamakenji24" />)
    expect(asFragment()).toMatchSnapshot()
  }),
  test("render null when provider is other than github", () => {
    const wrapper = render(<Grass provider="google" name="yamakenji24" />)
    expect(wrapper.container.innerHTML).toHaveLength(0);
  })
})