import { newE2EPage } from '@stencil/core/testing';

describe('dtinth-project-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dtinth-project-header></dtinth-project-header>');

    const element = await page.find('dtinth-project-header');
    expect(element).toHaveClass('hydrated');
  });
});
