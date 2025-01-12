import { createFileRoute } from '@tanstack/react-router'
import { mount } from 'taskForm/TaskForm'
import React, { useRef, useEffect } from 'react'

export const Route = createFileRoute('/task')({
  component: RouteComponent,
})

function RouteComponent() {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return <div ref={ref} />
}
