import { UnixToUtcPipe } from './unix-to-utc.pipe';

describe('UnixToUtcPipe', () => {
  it('create an instance', () => {
    const pipe = new UnixToUtcPipe();
    expect(pipe).toBeTruthy();
  });
});
