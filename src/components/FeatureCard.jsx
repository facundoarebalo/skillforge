const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 hover:-translate-y-1
transition-all">
            <div className="text-3xl">
                {icon}
            </div>
            <h3 className="font-semibold text-xl">{title}</h3>
            <p className="text-zinc-400 mt-2">{description}</p>
        </div>
    )
}

export default FeatureCard