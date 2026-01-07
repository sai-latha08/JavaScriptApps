//API calling logic using async,await
const getDetails = async () => {
  //request data gathering logic
  let uid = document.getElementById("userid").value;
  let para = document.getElementById("simple");
  let result = document.getElementById("sample");
  //validation logic
  if (uid == "") {
    alert("This enter userid");
    return;
  }
  para.style.display = "block";
  //business logic
  try {
    const [userRes, postRes] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${uid}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userid=${uid}`),
    ]);
    const userData = await userRes.json();
    const postData = await postRes.json();
    result.innerHTML = `
        <h3>${userData.name}</h3>
        <p>${userData.email}</p>
        <h3>posts</h3>
        <ul>
        ${postData.map((item) => `<li>${item.title}`)}</ul>`;
  } catch (error) {
    result.innerHTML = "<h3>something went wrong</h3>";
  }
};
