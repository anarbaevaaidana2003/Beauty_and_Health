export const App = () => {
  const ideas = [
    { name: "fjdkls", nick: "djksnfl", description: "dkgdnsx" },
    { name: "fjdkls", nick: "djksnfl", description: "dkgdnsx" },
    { name: "fjdkls", nick: "djksnfl", description: "dkgdnsx" },
  ];
  return (
    <div>
      <h1>Beauty</h1>
      {ideas.map((idea) => {
        return (
          <div key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        );
      })}
    </div>
  );
};
