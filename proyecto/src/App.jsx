import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Task } from './components'
import './App.css'

const tasks = []

class TaskClass{
  constructor(title,description){
    this.title = title;
    this.description = description;
    this.id = tasks.length
    this.index = this.id - 1
    tasks.push(this)
  }
  remove() {
    tasks.splice(this.index,1)
  }
}

let task1 = new Task('Hola','Mundo')
console.log(tasks)

function App() {
  
  return (
    <div>
    <ul>
      <li>

      </li>
    </ul>
    </div>
  )
}

export default App
