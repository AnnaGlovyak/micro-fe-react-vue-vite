import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tasklist')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tasklist"!</div>
}
