import { useState, useEffect } from 'react';

const query = '(prefers-reduced-motion: reduce)';

const getInitialState = () => {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
        return window.matchMedia(query).matches;
    }
    return false;
};

export function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const listener = (event) => {
            setPrefersReducedMotion(event.matches);
        };

        mediaQueryList.addEventListener('change', listener);
        return () => {
            mediaQueryList.removeEventListener('change', listener);
        };
    }, []);

    return prefersReducedMotion;
}
