import { Link } from "react-router-dom";

function DSA() {
  const topics = [
    {
      name: "Arrays",
      icon: "📊",
      description: "Learn and practice array-based problems.",
      questions: 35,
      path: "/practice/dsa/arrays",
    },
    {
      name: "Strings",
      icon: "🔤",
      description: "Practice string manipulation and algorithms.",
      questions: 20,
      path: "/practice/dsa/strings",
    },
    {
      name: "Linked List",
      icon: "🔗",
      description: "Master singly and doubly linked lists.",
      questions: 20,
      path: "/practice/dsa/linked-list",
    },
    {
      name: "Stack",
      icon: "📚",
      description: "Practice stack and monotonic stack interview problems.",
      questions: 20,
      path: "/practice/dsa/stack",
    },
    {
      name: "Queue",
      icon: "🚶",
      description: "Master queue, deque and sliding window patterns.",
      questions: 20,
      path: "/practice/dsa/queue",
    },
    {
      name: "Binary Tree",
      icon: "🌳",
      description: "Practice tree traversal and problems.",
      questions: 45,
      path: "#",
    },
    {
      name: "Graph",
      icon: "🕸️",
      description: "Master BFS, DFS and graph algorithms.",
      questions: 40,
      path: "#",
    },
    {
      name: "Dynamic Programming",
      icon: "🧩",
      description: "Solve optimization and DP problems.",
      questions: 50,
      path: "#",
    },
  ];

  return (
    <div className="dsa-page">
      {/* Header */}
      <div className="dsa-header">
        <p className="section-label">CODING PRACTICE</p>

        <h1>Data Structures & Algorithms</h1>

        <p>
          Strengthen your problem-solving skills with carefully selected DSA
          problems.
        </p>
      </div>

      {/* DSA Topics */}
      <div className="dsa-container">
        {topics.map((topic) => (
          <div className="dsa-card" key={topic.name}>
            <div className="dsa-icon">{topic.icon}</div>

            <h2>{topic.name}</h2>

            <p>{topic.description}</p>

            <div className="dsa-bottom">
              <span>{topic.questions} Questions</span>

              <Link to={topic.path} className="btn primary-btn">
                Practice →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DSA;
