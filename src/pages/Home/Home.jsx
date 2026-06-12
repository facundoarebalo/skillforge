import Button from "../../components/Button";

const Home = () => {


  const topics = [
    "Frontend",
    "Backend",
    "AI",
    "Tools",
  ]
  return (
    <div className="text-white flex flex-col items-center pt-32 gap-4">
      <h1 className="text-6xl font-bold">
        SkillForge
      </h1>

      <p className="text-zinc-400 text-center max-w-xl">
        The interactive platform where developers
        learn by building real projects.
      </p>

      <div className="flex gap-4">
        <Button variant="primary">
          Start Learning
        </Button>

        <Button variant="secondary">
          View Learning Paths
        </Button>
      </div>

      <div className="flex gap-3">
        {topics.map((topic) => (
          <span
            key={topic}
            className="px-3 py-1 border border-zinc-700 rounded-full text-sm text-zinc-400"
          >
            {topic}
          </span>
        ))}
      </div>



    </div>
  );
};

export default Home