# vhs-yarn Issue Demonstration

This repository demonstrates a dependency resolution issue encountered with `video.js` when using `yarn`. It showcases
how two versions of `video.js` can be loaded simultaneously leading to potential conflicts and unpredictable behavior.

## Quick Start

Follow these steps to replicate the issue and see the problem in action.

### Installation

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/jboix/vhs-yarn.git
cd vhs-yarn
yarn
```

### Running the Project

To start the development server and observe the issue in a browser:

```bash
yarn dev
```

### Verifying the Issue

After running the project, open your browser and navigate to: http://localhost:5173
Using the browser's developer tools, you can inspect the loaded scripts to verify that two different versions
of `video.js` are indeed being loaded.