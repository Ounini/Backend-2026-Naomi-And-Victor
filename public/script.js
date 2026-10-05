const form = document.getElementById("userForm");
const usersContainer = document.getElementById("users");

// Create User
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();
  console.log(data);
  form.reset();
  getUsers();
});

async function getUsers() {
  const response = await fetch("/users");
  const users = await response.json();
  usersContainer.innerHTML = "";
  users.forEach((user) => {
    console.log(user);
    const div = document.createElement("div");
    div.className = "user";
    div.innerHTML = `
        <h3>${user.email}</h3>
        <p>${user.role}</p>
        <img id="userImg" src="/users/profile-picture/${user.profilePicture}" alt="profile-picture">`;

    usersContainer.appendChild(div);
  });
}

// everytime the component mount, I want it to call this function getUsers()
getUsers();
