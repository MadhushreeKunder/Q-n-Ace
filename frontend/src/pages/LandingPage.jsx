import landingPageStyles from "../styles/landingPage.module.css";
import InterviewScreen from "../assets/qnAceDemo.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className={landingPageStyles.app}>
      <section className={landingPageStyles.container}>
        <div className={landingPageStyles.content}>
          <h1 className={landingPageStyles.heroText}>
            Ace Your Interviews with AI Precision
          </h1>
          <p className={landingPageStyles.description}>
            Worried AI will steal your job? Let AI help you land one instead.
            Try QnAce!
          </p>
          <Link to="/category">
            <button className={landingPageStyles.startButton}>Start</button>
          </Link>
        </div>
      </section>

      <section className={landingPageStyles.container}>
        <img
          src={InterviewScreen}
          alt="Interview screen"
          className={landingPageStyles.demoImage}
        />
      </section>

      <section
        className={`${landingPageStyles.bulletPointsSection} ${landingPageStyles.container}`}
      >
        <div className={landingPageStyles.bulletPoints}>
          <h4 className={landingPageStyles.bulletTitle}>
            Perfect Interview Environment
          </h4>
          <p className={landingPageStyles.bulletDescription}>
            Practice with a realistic AI interviewer who asks insightful
            questions and simulates a true interview setting.
          </p>
        </div>
        <div className={landingPageStyles.bulletPoints}>
          <h4 className={landingPageStyles.bulletTitle}>
            Targeted Practice, Tangible Results
          </h4>
          <p className={landingPageStyles.bulletDescription}>
            Master the core interview topics with our strategically chosen topic
            focus and difficulty level.
          </p>
        </div>
        <div className={landingPageStyles.bulletPoints}>
          <h4 className={landingPageStyles.bulletTitle}>
            Performance Analysis by AI experts
          </h4>
          <p className={landingPageStyles.bulletDescription}>
            Receive comprehensive feedback at the end of each session, covering
            your verbal and nonverbal communication.
          </p>
        </div>
      </section>
    </main>
  );
}
