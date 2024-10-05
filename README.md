# AI-Powered Web Application with Next.js and TensorFlow.js

This project demonstrates how to build an AI-powered web application using Next.js and TensorFlow.js. The application uses the MobileNet model for image classification in the browser.

## Features

- **Image Classification:** Upload an image to classify it into multiple categories using a pre-trained MobileNet model.
- **Responsive UI:** Built with Next.js for server-side rendering and a responsive design.
- **Deployment:** Instructions for deploying the application on Vercel.

## Installation

Clone the repository:

```bash
git clone https://github.com/ivansing/ai-web-app.git
cd your-repo
```


```bash
npm install
```

## Usage

To run the application locally:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the applaction running.

## Implementation

### Techologies Used

- Next.js Reach framework for building server-side rendered applications.
- TensorFlow.js: Machine learning library for training and deploying models in the browser.

## Project Structure

- `pages/index.js`: Entry point of the application, contains the main UI and logic.
- `utils/imageProcessing.js`: Utility functions for loading the MobileNet model, preprocessing images, and handling predictions.

## How to Test

 With the server running already, you can input images and then analyze them. The result will be a list of matching percentages of the image. It could be more accurate, but the central concept is to capture any image to analyze.


## Deployment

This project is set up to be deployed on Vercel.

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy the application

```bash
vercel
```

Follow the prompts to deploy the application to Vercel. Once deployed, you will get an unique URL for your application.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your changes.

## License

This project is licensed under MIT License - See the LICENSE for details.

## Acknowledgements

- TensorFlow.js team for providing the MobileNet model and documentation.
- Next.js community for the robust framework and helpful resources.


