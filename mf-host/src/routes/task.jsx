import { createFileRoute } from "@tanstack/react-router";
import { mount } from "taskForm/TaskForm";
import React, { useRef, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/task")({
  component: RouteComponent,
});

function RouteComponent() {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    mount(ref.current, navigate);
  }, []);

  return <div ref={ref} />;
}
