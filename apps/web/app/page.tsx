import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="text-red-900 underline text-2xl">
      Hello from web app
      <Button className="text-green-400 bg-slate-800" appName="WEB APP">
        Click Me
      </Button>
    </div>
  );
}
