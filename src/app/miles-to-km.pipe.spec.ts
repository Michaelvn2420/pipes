import { MilesToKmPipe } from './miles-to-km.pipe';

describe('MilesToKmPipe', () => {
  it('create an instance', () => {
    const pipe = new MilesToKmPipe();
    expect(pipe).toBeTruthy();
  });
});
