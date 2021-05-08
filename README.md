# useUpdateLayoutEffect

[![version](https://img.shields.io/npm/v/use-update-layout-effect.svg)](https://www.npmjs.com/package/use-update-layout-effect)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/use-update-layout-effect.svg)](https://www.npmjs.com/package/use-update-layout-effect)
[![downloads](https://img.shields.io/npm/dt/use-update-layout-effect.svg)](https://www.npmjs.com/package/use-update-layout-effect)

`useUpdateLayoutEffect` is a React hook that mimics the behavior of
`componentDidUpdate` in function components.

You may also like
[`use-update-effect`](https://www.npmjs.com/package/use-update-effect).

## Install

- `npm install use-update-layout-effect --save` or
- `yarn add use-update-layout-effect`

## Use

You use the `useUpdateLayoutEffect` the same way you would use the
`useLayoutEffect` hook. Provide an effect callback and a dependency list, and
the effect callback will only execute when the dependency list updates.

For a behavior exactly the same as `componentDidUpdate`, provide an empty (`[]`)
or no (`undefined`) dependency list.

In the following example, there is no `alert` when the component mounts; but
when the username _changes_, an `alert` appears.

```javascript
import useUpdateLayoutEffect from 'use-update-layout-effect';

function MyComponent({ username }) {
  useUpdateLayoutEffect(() => {
    alert(`Now logged in as ${username}!`);
  }, [username]);

  return <div>{username}</div>;
}
```

In the following example, a _controlled_ input is allowed to have an in-flight
value until "Apply" is clicked. By using an update layout effect, we override
the in-flight value when a _new_ controlled value is provided. This is useful
when a controlled value may have more than one controlling component.

```javascript
import { useState } from 'react';
import useUpdateLayoutEffect from 'use-update-layout-effect';

function MyComponent({ onChange, value }) {
  const [localValue, setLocalValue] = useState(value);

  useUpdateLayoutEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <>
      <input
        onChange={e => {
          setLocalValue(e.target.value);
        }}
        value={localValue}
      />
      <input onClick={onChange} type="submit" value="Apply" />
    </>
  );
}
```
