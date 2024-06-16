import { StoryObj } from "@storybook/react";
import Slider from "../components/Slider/Slider";
import { fn } from "@storybook/test";
import { action } from '@storybook/addon-actions';

const meta = {
    title: 'Example/Slider',
    component: Slider,

    tags: ['autodocs'],

    args: { handleChange: action("onChange") },
}

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Sliders: Story = {
    args: {
        type: "Continuous",
        subtype: "Single",
        steps: 10,
        handleSize: 'Size_24',

    },
};
