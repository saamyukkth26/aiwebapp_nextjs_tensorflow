import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { loadModel,  loadImage } from "@/utils/imageProcessing";

export default function Home() {
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const handleAnalyzeClick = async () => {
    const fileInput = document.getElementById("image-upload");
    const imageFile = fileInput.files[0];

    if(!imageFile) {
      alert("Please upload an image file.")
      return
    }
    try {
      const image = await loadImage(imageFile);
      const predictions = await model.classify(image)
      setPredictions(predictions)
    } catch (error) {
      console.error('Error analyzing the image:', error)
    }
   
  };

  useState(() => {
    (async () => {
      try {
        const loadedModel = await loadModel();
      setModel(loadedModel);
      } catch (error) {
        console.error('Error loading the model:', error)
      }
      
    })();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>AI-Powered Web App</title>
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>AI-Powered Web Application</h1>
          <p className={styles.description}>
            Using Next.js and TensorFlow.js to show some AI model.
          </p>
          <div id="input-area">
            <input type="file" className={styles.input} id="image-upload" />
            <button className={styles.button} onClick={handleAnalyzeClick}>
              Analyze Image
            </button>
          </div>
          <div id="output-area">
            {predictions.length > 0 && (
              <ul>
                {predictions.map((pred, index) => (
                  <li key={index}>
                    {pred.className}: {(pred.probability * 100).toFixed(2)}%
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
