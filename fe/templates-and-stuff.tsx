// POST template.
async function post() {
  const post = await fetch("http://localhost:8080/", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
}
// GET template.
async function get() {
  const get = await fetch("http://localhost:8080/", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
// PATCH template.
async function patch() {
  const patch = await fetch("http://localhost:8080/", {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
}
// PUT template.
async function put() {
  const put = await fetch("http://localhost:8080/", {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
}
