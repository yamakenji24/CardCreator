import { render } from '@testing-library/react';

import { Icon } from '../ui/card/profile/Icon';

describe("<Icon />", () => {
  test("render icon img and text snapshot", () => {
    const {asFragment} = render(<Icon name="testing" icon="logo" />)
    expect(asFragment()).toMatchSnapshot()
  }),
  test("render null when name=null", () => {
    const wrapper = render(<Icon name={null} icon=''/>)
    expect(wrapper.container.innerHTML).toHaveLength(0);
  })
})