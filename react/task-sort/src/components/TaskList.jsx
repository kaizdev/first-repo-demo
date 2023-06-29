import React from 'react'

export const TaskList = () => {
  return (
    <section>
        {tasks.map(task => <TaskCard task={task})}
    </section>
)
}
