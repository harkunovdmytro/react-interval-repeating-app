import './App.css';
import {useEffect, useState} from "react";

const MILLISECOND = 1
const SECOND = 1000 * MILLISECOND
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
const WEEK = 7 * DAY
const MONTH = 30 * DAY

function App() {
    const [timeMarks, setTimeMarks] = useState([])
let repeats = 1
    useEffect(()=>{
        if(repeats){
            calculateTimeMarks()
            console.log('Hi there 🖐')
            console.log('This app was created for make calculation of interval repeating simplier.')
            console.log('There are some time intervals from now to hour, 8 hours, day etc.')
            console.log('Hope it will be useful not only for me.')
            console.log('Enjoy it!')
            console.log('Best wishes, the creator.')
            repeats--
        }
    },[])

    function calculateTimeMarks() {
        const timestamp = Date.now()
        setTimeMarks([
            packDate(timestamp + HOUR),
            packDate(timestamp + 8 * HOUR),
            packDate(timestamp + DAY),
            packDate(timestamp + 3 * DAY),
            packDate(timestamp + WEEK),
            packDate(timestamp + MONTH),
            packDate(timestamp + 3 * MONTH),
            packDate(timestamp + 6 * MONTH),
            packDate(timestamp + 365 * DAY),

        ])
    }

    function packDate(stamp) {
        const date = new Date(stamp)
        return `${correctNumber(date.getHours())}:${correctNumber(date.getMinutes())} - ${correctNumber(date.getDate())}.${correctNumber(date.getMonth()+1)}.${correctNumber(date.getFullYear())}`
    }

    function correctNumber(num) {
        if (num < 10) return `0${num}`
        return num
    }

    return (
        <div className="App">
                {/*<div >now: <br/> {packDate(Date.now())}</div>*/}
                <div >now: {packDate(Date.now())}</div>
            <ol>
                {timeMarks.map(item => (
                    <li key={item}>
                        {item}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default App;
