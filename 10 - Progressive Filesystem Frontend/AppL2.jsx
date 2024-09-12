import { useState } from 'react';
import './index.scss';

const App = () => {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');

    function handleHoursUpButtonClick() {
        if (parseInt(hours) > 22) {
            setHours('00')
        } else {
            setHours(parseInt(hours) < 9 ? `0${parseInt(hours) + 1}` : `${parseInt(hours) + 1}`)
        }

    }

    function handleHoursDownButtonClick() {
        if (parseInt(hours) < 1) {
            setHours('23')
        } else {
            setHours(parseInt(hours) < 11 ? `0${parseInt(hours) - 1}` : `${parseInt(hours) - 1}`)
        }
    }

    function handleMinutesUpButtonClick() {
        if (parseInt(minutes) > 58) {
            setMinutes('00')

        } else {
            setMinutes(parseInt(minutes) < 9 ? `0${parseInt(minutes) + 1}` : `${parseInt(minutes) + 1}`)
        }
    }

    function handleMinutesDownButtonClick() {
        if (parseInt(minutes) < 1) {
            setMinutes('59')

        } else {
            setMinutes(parseInt(minutes) < 11 ? `0${parseInt(minutes) - 1}` : `${parseInt(minutes) - 1}`)
        }
    }

    return (
        <div id="ClockUpdater" className="container">
            <div className="row">
                <button
                    id="hours-up-button"
                    className="btn btn-outline-primary col"
                    onClick={handleHoursUpButtonClick}
                >
                    &uarr;
                </button>
                <button
                    id="minutes-up-button"
                    className="btn btn-outline-primary col"
                    onClick={handleMinutesUpButtonClick}
                >
                    &uarr;
                </button>

                { /* Level 1: Add your code here */}
            </div>

            <div className="row">
                <div id="clock" className="badge badge-primary col">
                    {`${hours}:${minutes}`}
                </div>
            </div>

            <div className="row">
                <button
                    id="hours-down-button"
                    className="btn btn-outline-primary col"
                    onClick={handleHoursDownButtonClick}
                >
                    &darr;
                </button>
                <button
                    id="minutes-down-button"
                    className="btn btn-outline-primary col"
                    onClick={handleMinutesDownButtonClick}
                >
                    &darr;
                </button>

                { /* Level 1: Add your code here */}
            </div>
        </div>
    );
};

export default App;
