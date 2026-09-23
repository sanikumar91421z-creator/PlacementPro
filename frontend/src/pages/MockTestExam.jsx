import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function MockTestExam() {
  const { testId } = useParams();
  const navigate = useNavigate();

  const [test, setTest] = useState(null);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const autoSubmitTriggered = useRef(false);

  // Load mock test
  useEffect(() => {
    const fetchTest = async () => {
      try {
        setLoading(true);
        setError("");

        const token = localStorage.getItem("placementproToken");

        const { data } = await axios.get(
          `http://localhost:5000/api/mock-tests/${testId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (data.success) {
          setTest(data.test);

          const storageKey = `mockTestEndTime_${data.test.testId}`;

          let endTime = localStorage.getItem(storageKey);

          if (!endTime) {
            endTime = Date.now() + data.test.duration * 60 * 1000;

            localStorage.setItem(storageKey, String(endTime));
          }

          const remainingTime = Math.max(
            0,
            Math.ceil((Number(endTime) - Date.now()) / 1000),
          );

          setTimeLeft(remainingTime);
        } else {
          setError("Unable to load mock test.");
        }
      } catch (error) {
        console.error(
          "Mock test loading error:",
          error.response?.data?.message || error.message,
        );

        setError(error.response?.data?.message || "Unable to load mock test.");
      } finally {
        setLoading(false);
      }
    };

    fetchTest();
  }, [testId]);

  // Persistent timer
  useEffect(() => {
    if (!test) return;

    const storageKey = `mockTestEndTime_${test.testId}`;

    const updateTimer = () => {
      const endTime = localStorage.getItem(storageKey);

      if (!endTime) return;

      const remainingTime = Math.max(
        0,
        Math.ceil((Number(endTime) - Date.now()) / 1000),
      );

      setTimeLeft(remainingTime);
    };

    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [test]);

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [questionId]: optionIndex,
    }));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds,
    ).padStart(2, "0")}`;
  };

  const handleSubmit = async () => {
    if (!test || submitting || autoSubmitTriggered.current) {
      return;
    }

    autoSubmitTriggered.current = true;

    try {
      setSubmitting(true);

      const token = localStorage.getItem("placementproToken");

      const totalSeconds = test.duration * 60;

      const timeTaken = Math.min(
        totalSeconds,
        Math.max(0, totalSeconds - timeLeft),
      );

      const { data } = await axios.post(
        `http://localhost:5000/api/mock-tests/${test.testId}/submit`,
        {
          answers,
          timeTaken,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (data.success) {
        localStorage.removeItem(`mockTestEndTime_${test.testId}`);

        navigate("/practice/mock-tests/result", {
          state: {
            result: data.result,
          },
        });
      }
    } catch (error) {
      console.error(
        "Submit mock test error:",
        error.response?.data?.message || error.message,
      );

      autoSubmitTriggered.current = false;

      alert(error.response?.data?.message || "Unable to submit mock test.");
    } finally {
      setSubmitting(false);
    }
  };
  useEffect(() => {
    if (
      test &&
      !loading &&
      timeLeft === 0 &&
      !submitting &&
      !autoSubmitTriggered.current
    ) {
      handleSubmit();
    }
  }, [timeLeft, test, loading, submitting]);

  if (loading) {
    return (
      <div className="mock-exam-page">
        <p>Loading mock test...</p>
      </div>
    );
  }

  if (error || !test) {
    return (
      <div className="mock-exam-page">
        <p>{error || "Mock test not found."}</p>

        <button type="button" onClick={() => navigate("/practice/mock-tests")}>
          Back to Mock Tests
        </button>
      </div>
    );
  }

  if (!test.questions || test.questions.length === 0) {
    return (
      <div className="mock-exam-page">
        <p>No questions found for this mock test.</p>
      </div>
    );
  }

  const question = test.questions[currentQuestion];

  return (
    <div className="mock-exam-page">
      <div className="mock-exam-header">
        <div>
          <p className="section-label">MOCK TEST</p>

          <h1>{test.title}</h1>

          <p>
            {test.totalQuestions} Questions • {test.totalMarks} Marks
          </p>
        </div>

        <div className="mock-exam-timer">⏱ {formatTime(timeLeft)}</div>
      </div>

      <div className="mock-exam-layout">
        <main className="mock-question-area">
          <div className="mock-question-number">
            Question {currentQuestion + 1} of {test.totalQuestions}
          </div>

          <h2>{question.question}</h2>

          <div className="mock-options">
            {question.options.map((option, index) => (
              <button
                type="button"
                key={index}
                className={
                  answers[question.questionId] === index
                    ? "mock-option selected"
                    : "mock-option"
                }
                onClick={() => handleAnswer(question.questionId, index)}
              >
                <span>{String.fromCharCode(65 + index)}</span>

                {option}
              </button>
            ))}
          </div>

          <div className="mock-navigation">
            <button
              type="button"
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion((current) => current - 1)}
            >
              ← Previous
            </button>

            {currentQuestion < test.questions.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentQuestion((current) => current + 1)}
              >
                Next →
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Test"}
              </button>
            )}
          </div>
        </main>

        <aside className="mock-question-palette">
          <h3>Questions</h3>

          <div className="mock-question-grid">
            {test.questions.map((item, index) => (
              <button
                type="button"
                key={item.questionId}
                className={
                  answers[item.questionId] !== undefined ? "answered" : ""
                }
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <p>
            Answered: {Object.keys(answers).length} / {test.totalQuestions}
          </p>
        </aside>
      </div>

      <button type="button" onClick={() => navigate("/practice/mock-tests")}>
        Exit Test
      </button>
    </div>
  );
}

export default MockTestExam;
