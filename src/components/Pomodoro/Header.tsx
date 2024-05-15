import { FC } from "react";
const Header: FC = () => {
    return (
        <div>
            <div className="w-[1000px] m-auto flex justify-between p-6">
                <h2 className="text-2xl font-bold">Pomodoro Timer</h2>
                <button className="px-4 py-2 bg-indigo-500 rounded-lg text-white">New Beta</button>
            </div>
        </div>
    )
}
export default Header