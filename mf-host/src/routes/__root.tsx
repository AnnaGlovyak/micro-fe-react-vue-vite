import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/login" className="[&.active]:font-bold">
          Login
        </Link>
        <Link to="/tasklist" className="[&.active]:font-bold">
          Tasklist
        </Link>
        <Link to="/task" className="[&.active]:font-bold">
          TaskForm
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
