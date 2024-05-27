describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should scroll to the last item', async () => {
    await waitFor(element(by.id('item-13')))
      .toBeVisible(100)
      .whileElement(by.id('scrollview'))
      .scroll(50, 'down');
  });
});
