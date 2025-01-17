import { useNavigate } from "@tanstack/react-router";

export function onNavigate() {
  const navigate = useNavigate();

  return {
    navigate,
  };
}
// navigate({ to: '/posts/$postId', params: { postId } })
