import { FC, useState } from 'react'

const Pomodoro: FC = () => {
  const [active, setActive] = useState<('pomodoro' | 'rest' | 'longrest')>('pomodoro')



  return (
    <div>
      <div className="w-[1100px] p-6">
        <div className='flex justify-between'>
          <h2 className="text-2xl font-bold">Pomodoro Timer</h2>
          <button className="px-4 py-2 bg-indigo-500 rounded-lg text-white">New Beta</button>
        </div>

        <div className='w-[50%] m-auto text-center'>
          <button className='font-bold text-[20px] rounded-full transition-all duration-300 p-4 hover:bg-slate-300'>Why don't you take a challenge? 😏</button>
          <div className='flex mt-5'>
            <p style={{
              borderBottom: active == 'pomodoro' ? "1px solid black" : ''
            }} className=' text-blue-500 px-10 py-3 rounded-t-lg cursor-pointer hover:bg-indigo-100' onClick={() => { setActive('pomodoro') }}>Pomodoro <span className='font-extrabold'>0</span></p>
            <p style={{
              borderBottom: active == 'rest' ? "1px solid black" : ''
            }} className=' text-green-500 px-10 py-3 rounded-t-lg cursor-pointer  hover:bg-indigo-100' onClick={() => { setActive('rest') }}>Rest <span className='font-extrabold'>0</span></p>
            <p style={{
              borderBottom: active == 'longrest' ? "1px solid black" : ''
            }} className=' text-green-500 px-10 py-3 rounded-t-lg cursor-pointer  hover:bg-indigo-100' onClick={() => { setActive('longrest') }}>Long Rest <span className='font-extrabold'>0</span></p>
          </div>


          {
            active == 'pomodoro' ? <>
              <div className='P-3 bg-indigo-200 rounded-full w-[416px] h-[416px] pt-2 mt-10 m-auto'>
                <div className='w-[400px] rounded-full bg-indigo-50 h-[400px] mx-auto m-auto cursor-pointer hover:bg-indigo-100'>
                  <h1 className='font-semibold text-[80px] text-indigo-600 pt-32'>20:00</h1>
                  <span className='flex flex-col mt-10'>
                    <span className='text-indigo-400 font-semibold'>Level</span>
                    <span className='text-indigo-600 font-bold'>Popular</span>
                  </span>
                </div>
              </div>
              <div>
                <button className='w-2/3 bg-indigo-600 p-4 rounded-3xl mt-5 text-white text-2xl'>START</button>
              </div>
            </> : <></>
          }


          {
            active == 'rest' ? <>
              <div className='P-3 bg-emerald-100 rounded-full w-[416px] h-[416px] pt-2 mt-10 m-auto'>
                <div className='w-[400px] rounded-full bg-indigo-50 h-[400px] mx-auto m-auto cursor-pointer hover:bg-indigo-100'>
                  <h1 className='font-semibold text-[80px] text-emerald-600 pt-32'>5:00</h1>
                  <span className='flex flex-col mt-10'>
                    <span className='text-emerald-400 font-semibold'>Level</span>
                    <span className='text-emerald-600 font-bold'>Popular</span>
                  </span>
                </div>
              </div>
              <div>
                <button className='w-2/3 bg-emerald-600 p-4 rounded-3xl mt-5 text-white text-2xl'>START</button>
              </div>
            </> : <></>
          }

          {
            active == 'longrest' ? <>
              <div className='P-3 bg-emerald-100 rounded-full w-[416px] h-[416px] pt-2 mt-10 m-auto'>
                <div className='w-[400px] rounded-full bg-indigo-50 h-[400px] mx-auto m-auto cursor-pointer hover:bg-indigo-100'>
                  <h1 className='font-semibold text-[80px] text-emerald-600 pt-32'>15:00</h1>
                  <span className='flex flex-col mt-10'>
                    <span className='text-emerald-400 font-semibold'>Level</span>
                    <span className='text-emerald-600 font-bold'>Popular</span>
                  </span>
                </div>
              </div>
              <div>
                <button className='w-2/3 bg-emerald-600 p-4 rounded-3xl mt-5 text-white text-2xl'>START</button>
              </div>
            </> : <></>
          }




        </div>
      </div>


    </div>
  )
}

export default Pomodoro