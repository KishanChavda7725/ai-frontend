import { useCallback, useState } from 'react';

export function useToggle(initial = false) {
  const [value, set] = useState(initial);
  const toggle = useCallback(() => set((v) => !v), []);
  return { value, set, toggle };
}
