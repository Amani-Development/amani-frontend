import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PhoneInput from './phone';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof PhoneInput> = {
    title: 'Components/PhoneInput',
    component: PhoneInput,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {onChange: fn()}
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultInput: Story = {
    args: {
        label: 'Phone Number',
        disabled: false,
        type: 'number',
        placeholder: 'Phone Number',
        focused: true,
        options: [
            { value: 'NG', CountryCode: '+234', Country: 'Nigeria' },
            { value: 'US', CountryCode: '+1', Country: 'United State of America'},
        ],
    },
};