import React, { ChangeEvent, useState } from 'react';
import './DiscreteSlider.scss'
interface DiscreteSliderProps {
    handleSize: string,
    steps: number,
    handleChange: ({ }) => void
}

export const DiscreteSlider = ({ steps, handleChange, handleSize }: DiscreteSliderProps) => {
    const [value, setValue] = useState<number>(50);
    const min = 0;
    const max = 100;

    const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
        handleChange({ 'Value': event.target.value });

    };
    const stepSize = Math.floor(max / steps);
    const numSteps = [];
    for (let i = min; i <= max; i += stepSize) {
        numSteps.push(i);
    }
    return (
        <div className='slider-container'>
            <input
                type="range"
                min={min}
                max={max}
                step={stepSize}
                value={value}
                onChange={onValueChange}
                list='markers'
                className={`discrete-slider ${handleSize == 'Size_24' ? 'size-small' : 'size-large'}`}
                style={{
                    backgroundSize: `${value}% 100%`
                }}
            />
            <div className="discrete-slider-values">
                {numSteps.map((stepValue) => (
                    <div key={stepValue} className="discrete-slider-step" style={{ left: `${((stepValue - min) / (max - min)) * 100}%` }}>
                        {stepValue}
                    </div>
                ))}
            </div>
        </div>
    );
};

