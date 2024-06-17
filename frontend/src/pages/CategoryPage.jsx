import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DEV_URL } from "../api";
import { ALL_LEVELS, ALL_TOPICS } from "../constants/categories";
import { useAccess } from "../context/AccessContext";
import categoryPageStyles from "../styles/categoryPage.module.css";

function CategoryPage() {
  const { setAccessGranted } = useAccess();
  const [topic, setTopic] = useState(ALL_TOPICS[0]);
  const [difficulty, setDifficulty] = useState(ALL_LEVELS[0]);

  function handleDifficulty(level) {
    setDifficulty(level);
  }

  function handleTopic(topic) {
    setTopic(topic);
  }

  const sendCategoryToBackend = async () => {
    setAccessGranted(true);

    const data = {
      topic: topic.name,
      difficulty: difficulty.name.toLowerCase(),
    };

    try {
      const response = await axios.post(`${DEV_URL}/api/category`, {
        data,
      });
    } catch (error) {}
  };

  return (
    <div className={categoryPageStyles.mainContainer}>
      <h1 className={categoryPageStyles.mainHeading}>
        Choose a topic & difficulty level
      </h1>
      <div className={categoryPageStyles.categoryContainer}>
        <div>
          <h2 className={categoryPageStyles.categoryHeading}>Topic</h2>
          <div className={categoryPageStyles.categoryBtnContainer}>
            {ALL_TOPICS.map((topicName) => (
              <button
                key={topicName.id}
                className={`${categoryPageStyles.categoryBtn} ${
                  topicName.name === topic.name
                    ? categoryPageStyles.selectedOption
                    : ""
                }`}
                onClick={() => handleTopic(topicName)}
              >
                {topicName.name}
              </button>
            ))}
          </div>
        </div>
        <div className={categoryPageStyles.verticalLine}></div>
        <div>
          <h2 className={categoryPageStyles.categoryHeading}>Level</h2>
          <div className={categoryPageStyles.categoryBtnContainer}>
            {ALL_LEVELS.map((level) => {
              return (
                <button
                  key={level.id}
                  className={`${categoryPageStyles.categoryBtn} ${
                    level.name.toLowerCase() === difficulty.name.toLowerCase()
                      ? categoryPageStyles.selectedOption
                      : ""
                  }`}
                  onClick={() => handleDifficulty(level)}
                >
                  {level.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className={categoryPageStyles.startInterviewBtnContainer}>
        <Link to="/interview">
          <button
            className={categoryPageStyles.startInterviewButton}
            onClick={sendCategoryToBackend}
          >
            Begin Interview
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryPage;
