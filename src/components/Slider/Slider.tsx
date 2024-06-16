import React, { useState } from 'react'
import './slider.css'
import RangeSlider from '../RangeSlider/RangeSlider'
import ContinuousSlider from '../ContinuousSlider/ContinuousSlider'
import DiscreteSlider from '../DiscreteSlider/DiscreteSlider'
import { SliderProps } from './slider'
function Slider({ type, subtype, steps, handleSize, handleChange }: SliderProps) {
    if (subtype == 'Range') {
        return <RangeSlider handleChange={handleChange} handleSize={handleSize} />
    }
    if (type == 'Continuous') {
        return <ContinuousSlider handleChange={handleChange} handleSize={handleSize} />
    }
    if (type == 'Discrete')
        return (
            <DiscreteSlider steps={steps} handleChange={handleChange} handleSize={handleSize} />
        )
}

export default Slider
