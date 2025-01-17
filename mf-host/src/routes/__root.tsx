import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { onNavigate } from "../useNavigate";

export const Route = createRootRoute({
  component: () => {
    const { navigate } = onNavigate();
    return (
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
          <button onClick={() => navigate({ to: "/login" })}>GO to </button>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
});
