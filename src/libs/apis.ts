export function sendEmail(params: Params) {
  return fetch(
    "/email.json",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(params)
    }
  ).then((res) => res.json())
}

type Params = {
  name: string,
  email: string,
  message: string
} 