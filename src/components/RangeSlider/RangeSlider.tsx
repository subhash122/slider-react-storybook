import React, { ChangeEvent, useState } from 'react'
import './RangeSlider.scss'
function RangeSlider({ handleChange, handleSize }: { handleChange: ({ }) => void, handleSize: string }) {
    const [minValue, setMinValue] = useState<number>(20);
    const [maxValue, setMaxValue] = useState<number>(80);
    const min = 0;
    const max = 100;

    const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), maxValue - 1);
        setMinValue(value);
        handleChange({ 'min': Number(event.target.value), 'max': maxValue })
    };

    const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(event.target.value), minValue + 1);
        setMaxValue(value);
        handleChange({ 'min': minValue, 'max': Number(event.target.value) })
    };

    return (
        <div className="range-slider">
            <input
                type="range"
                min={min}
                max={max}
                value={minValue}
                onChange={handleMinChange}
                className={`thumb thumb-left ${handleSize == 'Size_24' ? 'size-small' : 'size-large'}`}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxValue}
                onChange={handleMaxChange}
                className={`thumb thumb-right ${handleSize == 'Size_24' ? 'size-small' : 'size-large'}`}
            />
            <div className="slider">
                <div className="track"></div>
                <div
                    className="range"
                    style={{
                        left: `${(minValue / max) * 100}%`,
                        right: `${100 - (maxValue / max) * 100}%`,
                    }}
                ></div>
            </div>
        </div>
    );
}

export default RangeSlider
