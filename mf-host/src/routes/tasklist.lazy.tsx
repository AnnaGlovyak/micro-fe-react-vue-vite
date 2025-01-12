import { createLazyFileRoute } from "@tanstack/react-router";
import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const TaskListLazy = React.lazy(() => import("list/List"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
export const Route = createLazyFileRoute("/tasklist")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/tasklist"!
      <TaskListLazy></TaskListLazy>
    </div>
  );
}
