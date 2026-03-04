# Product Landing Page Component

A React-based product landing page component featuring an intelligent form handling system that optimizes performance through controlled re-renders.

## Features

- **Smart Form Management**: Utilizes `useRef` hooks to manage form field values without triggering unnecessary re-renders during user input
- **Auto-Focus Enhancement**: Implements `useEffect` to automatically focus the "Full Name" field upon page load for improved user experience
- **Three-Field Form**: Collects essential customer information:
  - Full Name (text input)
  - Email Address (email input)
  - Product Model (dropdown selection: Standard, Pro, Ultra)
- **Efficient Data Capture**: Values are only accessed when the user submits the form, preventing performance overhead

## Technical Implementation

- Built with React and JSX
- Uses `useRef` for form field references
- Implements `useEffect` for component lifecycle management
- Zero unnecessary re-renders during typing

## Getting Started

Import the ProductLanding component into your React application. The form will automatically handle focus management and data capture without impacting performance.

## Usage Example

```jsx
import ProductLanding from './ProductLanding';

function App() {
  return (
    <div>
      <ProductLanding />
    </div>
  );
}
```

## How It Works
The component creates three refs 
*(nameRef, emailRef, productRef)* that connect directly to their respective form elements. When the page loads,``` useEffect ```triggers focus on the name field. Upon form submission, the values are extracted from the refs and displayed, bypassing the need for state management during typing.

![image](https://github.com/user-attachments/assets/ee425377-fe54-43f8-a73f-dae6605863a3)

*Special thanks to Deepseek and Replit* 
