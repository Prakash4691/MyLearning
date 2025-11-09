interface User {
  name: string;
  age: number;
  location: string;
  skills: string[];
  isOnline: boolean;
  profilePicture: string;
}

function ProfileCard() {
  let user: User = {
    name: "Prakash",
    age: 34,
    location: "Mexico",
    skills: ["PowerPlatform", "Azure", "Dynamics365", "AI", "AiAgents"],
    isOnline: true,
    profilePicture: "https://via.placeholder.com/150",
  };

  return (
    <>
      <img src={user.profilePicture} alt="Profile Picture"></img>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.location}</h1>
      {user.isOnline ? "Online" : "Offline"}
      {user.skills.map((skill) => (
        <li>{skill}</li>
      ))}
      <h1>Message:</h1>
      {user.isOnline ? "Available for Work" : "Currently Offline"}
    </>
  );
}

export default ProfileCard;
