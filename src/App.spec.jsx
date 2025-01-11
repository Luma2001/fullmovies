import { render, screen} from "@testing-library/react"
import { describe, it, expect } from 'vitest';
import App from './App'

describe("App", () => {
  it('should render component', () => {
    const component = render(<App />);
    expect(component).toBeDefined();
    })
  
  });

//   it('false to be false', () => {
//     expect(false).toBe(false);
//   });
