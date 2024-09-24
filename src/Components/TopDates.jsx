import React from "react";

const TopDates = ({ onDateSelect, selectedDate }) => {
    const dates = ['24', '25', '26', '27', '28']; // Predetermined dates

    return (
        <>
        <div className="topDateScroll"> 
            {dates.map((date, index) => (
                <button 
                    key={index}
                    className={`buttoner dateButton ${selectedDate === date ? 'selected' : ''}`}
                    onClick={() => onDateSelect(date)}
                >
                    {date} September
                </button>
            ))}
        </div>
        </>
    );
};

export default TopDates;
