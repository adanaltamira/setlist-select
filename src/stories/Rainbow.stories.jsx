import React from 'react';
import { Rainbow } from '../components/Rainbow';
import { HighlightRainbow } from '../components/HighlightRainbow';
import { AnimatedRainbow } from '../components/AnimatedRainbow';

export default {
  title: 'Components/Rainbow',
  component: Rainbow,
};

export const Default = () => <Rainbow />;
export const Interactive = () => <HighlightRainbow />;
export const Animated = () => <AnimatedRainbow />;

Default.storyName = 'Default Rainbow';
Interactive.storyName = 'Interactive Rainbow';
Animated.storyName = 'Animated Rainbow';
