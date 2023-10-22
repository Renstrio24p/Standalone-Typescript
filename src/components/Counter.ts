export default function Counter(element: HTMLButtonElement) {
    let counter = 0
    const setCounter = (count: number) => {
      counter = count
      element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
  }
  
  Object.defineProperty(Counter, 'name', { value: 'Counter' }); // Defining DOM for Counter
