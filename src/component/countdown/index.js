import React, {useState, useEffect} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountDown = () => {
    const [countDown, setCountDown] = useState({
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
    });
    var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

    const fixing = ((input) => {
        if (input < 10) {
            return '0' + input;
        } else {
            return input;
        }
    })

    useEffect(() => {
        const timer = setInterval(() => {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            const fixhours = fixing(hours);
            const fixminutes = fixing(minutes);
            const fixseconds = fixing(seconds);
            
            setCountDown({days:days, hours:fixhours, minutes:fixminutes, seconds:fixseconds});
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <table style={{margin:'0 auto'}}>
            <tr className="countDown">
                <td><span>{countDown.days}</span></td>
                <td><span>:</span></td>
                <td><span>{countDown.hours}</span></td>
                <td><span>:</span></td>
                <td><span>{countDown.minutes}</span></td>
                <td><span>:</span></td>
                <td><span>{countDown.seconds}</span></td>
            </tr>
            <tr className="countDownTitle">
                <td><span>DAYS</span></td>
                <td></td>
                <td><span>HOURS</span></td>
                <td></td>
                <td><span>MINUTES</span></td>
                <td></td>
                <td><span>SECONDS</span></td>
            </tr>
        </table>
    )
};

export default CountDown;
