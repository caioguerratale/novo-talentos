import { useRef, type TouchEvent } from 'react';

interface SwipeNavigationOptions {
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
    threshold?: number;
}

export const useSwipeNavigation = ({
    onSwipeLeft,
    onSwipeRight,
    threshold = 48,
}: SwipeNavigationOptions) => {
    const startX = useRef<number | null>(null);
    const startY = useRef<number | null>(null);

    const reset = () => {
        startX.current = null;
        startY.current = null;
    };

    return {
        onTouchStart: (event: TouchEvent<HTMLElement>) => {
            const touch = event.touches[0];
            startX.current = touch.clientX;
            startY.current = touch.clientY;
        },
        onTouchEnd: (event: TouchEvent<HTMLElement>) => {
            if (startX.current === null || startY.current === null) {
                return;
            }

            const touch = event.changedTouches[0];
            const deltaX = touch.clientX - startX.current;
            const deltaY = touch.clientY - startY.current;

            reset();

            if (Math.abs(deltaX) < threshold || Math.abs(deltaX) <= Math.abs(deltaY)) {
                return;
            }

            if (deltaX < 0) {
                onSwipeLeft();
                return;
            }

            onSwipeRight();
        },
        onTouchCancel: reset,
    };
};
