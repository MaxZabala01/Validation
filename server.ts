import express, { Request, Response } from "express";

type NameEmailData = {
  name: string;
  email: string;
};

const storedData: NameEmailData[] = [];

const app = express();
const port = 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/data", (req: Request, res: Response) => {
  res.json(storedData);
});

app.post("/submit", (req: Request, res: Response) => {
  const { name, email } = req.body;
  // Do something with the submitted data
  console.log(`Received form submission: Name - ${name}, Email - ${email}`);
  storedData.push({ name, email });
  res.send("Form submitted successfully!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});