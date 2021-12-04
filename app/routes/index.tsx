import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => ({
  title: "Remix Starter",
  description: "Hello World!",
});

export default function Index() {
  return (
    <div className="min-h-screen">
      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  );
}
