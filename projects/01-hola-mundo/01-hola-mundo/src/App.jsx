import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  const users = [
    {
      userName: "midudev",
      name: "Miguel Angel Duran",
      isFollowing: true,
    },
    {
      userName: "pheralb",
      name: "Pablo H.",
      isFollowing: false,
    },
    {
      userName: "PacoHdezs",
      name: "Paco Hdez",
      isFollowing: true,
    },
    {
      userName: "TMChein",
      name: "Tomas",
      isFollowing: false,
    },
  ];

  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          formatUserName={formatUserName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
