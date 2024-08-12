# Website Builder

This is a project for a Website Builder application that allows users to create, edit, and preview websites using a drag-and-drop interface. The builder includes support for various elements, styling customization, preview modes, and more.

## Table of Contents

- [Features](#features)
- [Setup Instructions](#setup-instructions)

## Features

### Drag-and-Drop Elements

- **Image**: Drag and drop images into the editor, set their source, and adjust their properties.
- **Text**: Add text blocks, edit their content, and customize the font, color, size, and more.
- **Link**: Insert links, set URLs, and customize their appearance.
- **Video**: Embed videos from external sources (e.g., YouTube), set the video URL, and configure properties.
- **Containers**: Add containers with 2 or 3 columns to organize elements side by side.

### Styling Properties

- Full access to styling properties for each element in the sidebar, including:
  - Background color
  - Font size
  - Text alignment
  - Margin and padding
  - Border properties
  - More custom properties depending on the element type

### Preview Mode

- **Preview Mode**: Toggle between edit and preview modes to see how your website will look when published.

### Undo/Redo Feature

- Support for undoing and redoing changes made in the editor, allowing you to revert to previous states or redo actions.

### Device Type Simulation

- **Device Types**: Preview your website on different devices, including:
  - Mobile
  - Tablet
  - Desktop

## Setup Instructions

Follow these steps to set up the project on your local machine:

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Yarn](https://yarnpkg.com/) (or use `npm` if preferred)

### Step 1: Clone the Repository

```bash
git clone https://github.com/SeanThakur/WebBuilder.git
cd webBuilder
```

### Step 2: Install Dependencies

Use Yarn to install the required dependencies:

```bash
yarn install

or use npm

npm install
```

### Step 3: Run the Development Server

Start the development server to view the project locally:

```bash
yarn dev

or use npm

npm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).
