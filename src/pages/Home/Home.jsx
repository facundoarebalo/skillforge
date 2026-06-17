import { useState } from "react";
import Button from "../../components/Button";
import FeatureCard from "../../components/FeatureCard";


const Home = () => {

  const [count, setCount] = useState(0)


  const topics = [
    "Frontend",
    "Backend",
    "AI",
    "Tools",
  ]

  const features = [
    {
      icon: "🛠",
      title: "Aprende Construyendo",
      description: "Construye proyectos reales en lugar de mirar tutoriales interminables.",
    },
    {
      icon: "🎯",
      title: "Desafíos interactivos",
      description: "Pon en práctica los conceptos inmediatamente.",
    },
    {
      icon: "📈",
      title: "Sigue tu progreso",
      description: "Mide tu crecimiento y mantén la motivación.",
    },
  ];


  return (
    <div className="text-white max-w-5xl mx-auto flex flex-col items-center pt-32">
      <h1 className="text-6xl font-bold">
        SkillForge
      </h1>

      <p className="text-zinc-400 text-center max-w-xl mt-4">
        Aprende construyendo.
        Domina creando proyectos reales.
      </p>

      <div className="flex gap-4 mt-8">
        <Button onClick={() => setCount(count + 1)} variant="primary"  >
          Comenzar
        </Button>

        <Button variant="secondary">
          View Learning Paths
        </Button>
      </div>


      <div className="flex gap-3 mt-6">
        {topics.map((topic) => (
          <span
            key={topic}
            className="px-3 py-1 border border-zinc-700 rounded-full text-sm text-zinc-400"
          >
            {topic}
          </span>
        ))}
      </div>


      <h2 className="text-3xl font-bold mt-20">Por qué SkillForge?</h2>


      <div className="grid grid-cols-3 gap-6 mt-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))
        }
      </div>








    </div>
  );
};

export default Home