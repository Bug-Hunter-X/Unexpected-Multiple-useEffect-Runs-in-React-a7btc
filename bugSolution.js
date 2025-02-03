```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered with count:', count);
    // ... your side effects.  Ensure these are safe for multiple executions if needed 
    // Otherwise ensure proper cleanup.
    return () => {
      console.log('Component unmounted');
    };
  }, [count]); // Only re-run the effect if 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```