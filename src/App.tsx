import { FC } from 'react'
import Pomodoro from './components/Pomodoro/Pomodoro'
// import Header from './components/Pomodoro/Header'

const  App: FC = () => {
  return (
    <div>
      <div>
        {/* <Header></Header> */}
        <Pomodoro></Pomodoro>
      </div>
    </div>
  )
}

export default App