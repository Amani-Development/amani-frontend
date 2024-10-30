import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './button-III';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
    title: 'Components/Button-III',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    argTypes: {
        backgroundColor: { control: 'color' },
        textColour: { control: 'color' },
},
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const GoogleBtn: Story = {
    args: {
        onClick: () => console.log('Button clicked'),

        textColour: 'rgb(74, 75, 81)',
        label: 'Continue with Google',
        backgroundColor: 'rgb(255, 255, 255)',
        iconLink: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725453799/Am/Amani/google_symbol.svg_rbuaaj.svg',
    },
};

export const AppleBtn: Story = {
    args:{
        onClick: () => console.log('Button clicked'),

        textColour: ' rgb(243, 243, 244)',
        label: 'Continue with Apple',
        backgroundColor: 'rgb(56, 57, 61)',
        iconLink: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725453799/Am/Amani/apple_logo.svg_nedn4o.svg',
    },
};