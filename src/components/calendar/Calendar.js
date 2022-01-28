import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Data, IconWrap } from "./style/calendar";
import { CalendarIcon } from "./icon/CalendarIcon";

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Data>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd.MM.yyyy"
            />
            <IconWrap>
                <CalendarIcon />
            </IconWrap>
        </Data>
    );
};
export default Calendar;
