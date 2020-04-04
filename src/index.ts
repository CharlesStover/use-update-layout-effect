import React, { DependencyList, EffectCallback, MutableRefObject } from 'react';

type Destructor = void | (() => void | undefined);

export default function useUpdateLayoutEffect(
  effect: EffectCallback,
  deps: DependencyList = [],
): void {
  const firstRun: MutableRefObject<boolean> = React.useRef(true);

  React.useLayoutEffect(
    (): Destructor => {
      if (firstRun.current === true) {
        firstRun.current = false;
        return;
      }
      return effect();
    },

    // eslint-disable-next-line
    deps,
  );
}
