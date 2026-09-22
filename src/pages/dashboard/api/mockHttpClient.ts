type MockRequest<T> = () => T

export function mockHttpRequest<T>(request: MockRequest<T>, delay = 250): Promise<T> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(request()), delay)
  })
}
