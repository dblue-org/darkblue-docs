import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import Block from "@site/src/components/Block";
import PanBaidu from "@site/src/components/Pan/PanBaidu";
import PanAli from "@site/src/components/Pan/PanAli";

export default {
	// Re-use the default mapping
	...MDXComponents,
	// Map the "<Highlight>" tag to our Highlight component
	// `Highlight` will receive all props that were passed to `<Highlight>` in MDX
	Block,
	PanBaidu,
	PanAli,
};