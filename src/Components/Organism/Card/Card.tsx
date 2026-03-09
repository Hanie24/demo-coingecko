import type { CardProps } from "./Card.types";

export default function Card({ children }: CardProps) {
  return (
    <article className="bg-gray-900 p-4 rounded-md w-full border border-gray-900 hover:border-blue-100 transition delay-150 duration-300 ease-in-out">
      {children}
    </article>
  );
}
