
export interface SliderProps {
    type?: "Continuous" | "Discrete",
    subtype?: 'Single' | 'Range',
    steps: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    handleSize: 'Size_24' | 'Size_32',
    handleChange: () => void
}
