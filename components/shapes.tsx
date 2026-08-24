type ShapeProps = {
  className?: string;
};

export function ShapeTriangle({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M20 2 L38 34 L2 34 Z" fill="currentColor" />
    </svg>
  );
}

export function ShapeStar({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20 0c1 8 3 11 11 11-8 1-10 3-11 11-1-8-3-10-11-11 8 0 10-3 11-11Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ShapeHexagon({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20 1 36 10.5v19L20 39 4 29.5v-19Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ShapeDot({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="10" cy="10" r="9" fill="currentColor" />
    </svg>
  );
}

export function ShapeSquiggle({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 50 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 18c4-14 10-14 14 0s10 14 14 0 10-14 14 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function ShapeArrow({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 20c8 2 16 2 30 0M24 10l10 10-10 10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ShapeBolt({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
    </svg>
  );
}

export function ShapeCheck({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 13l5 5L20 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShapePlay({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 4l14 8-14 8V4Z" fill="currentColor" />
    </svg>
  );
}

export function ShapeFlame({ className }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2c1 3-2 4-2 7a3 3 0 0 0 6 0c2 2 3 4 3 6a7 7 0 1 1-14 0c0-4 3-6 4-9 1 1 1.5 2 1.5 3.5C10.5 8 11.5 4 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
