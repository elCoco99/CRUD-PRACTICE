import { createClient } from "@libsql/client";

export const client = createClient({
  url: "libsql://msdb-elcoco99.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MDk3NDc5MjgsImlkIjoiNzZlMTg5NTQtZWY0Mi00NjUxLWEyNDgtZjRmNjVmYzgzY2U5In0.l-wVlCZDrG7Vzp9nJqMLvur0ew03yBf2nXZtcq4dJ0o-Fk5YdOh_GS2xzP-SgoiW760-AVpHTaOPxBelAvNZAQ",
});
