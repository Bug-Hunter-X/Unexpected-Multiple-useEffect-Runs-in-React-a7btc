# Unexpected useEffect Runs in React

This repository demonstrates a common issue in React applications where the `useEffect` hook runs more times than expected.  The problem arises from the dependency array not correctly specifying the values that trigger re-renders.

## Problem Description

The `useEffect` hook, while powerful, can introduce performance issues if not carefully managed.  Incorrect dependency arrays can cause the effect to run on every render, leading to unnecessary computations and potential race conditions.  This example showcases an implementation where an effect unexpectedly runs multiple times causing console spam and, in more complex scenarios, potential application instability.

## Solution

The provided solution focuses on correctly defining the dependency array for the `useEffect` hook. By only including `count` in the array, the effect only re-runs when the `count` variable changes.  This optimizes performance and ensures the side effects only occur when necessary.