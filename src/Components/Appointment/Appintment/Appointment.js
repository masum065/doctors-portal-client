import React, { useState } from 'react';
import AppintmentHeader from '../AppintmentHeader/AppintmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointmet = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange =(date)=>{
        setSelectedDate(date);
    }
    return (
        <>
            <AppintmentHeader handleDateChange={handleDateChange}/>
            <BookAppointment date={selectedDate}/>
        </>
    );
};

export default Appointmet;