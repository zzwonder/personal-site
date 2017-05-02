import { isPrime } from './utils';

// worker
self.onmessage = (msg) => {
  const view = new Uint8Array(msg.data.length);
  for (let i = 0; i < msg.data.length; i++) {
    view[i] = isPrime(i + msg.data.offset + 2);
  }
  self.postMessage({
    buffer: view.buffer,
    primes: Array.from(view).map((e, i) => [e, i + msg.data.offset + 2])
      .filter(a => a[0] === 1).map(a => a[1]),
    offset: msg.data.offset,
    length: msg.data.length,
  }, [view.buffer]);
};
