"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const storedData = [];
const app = (0, express_1.default)();
const port = 8081;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
app.get("/", (req, res) => {
    res.sendFile("./index.html", { root: __dirname });
});
app.get("/data", (req, res) => {
    res.json(storedData);
});
app.post("/submit", (req, res) => {
    const { name, email } = req.body;
    // Do something with the submitted data
    console.log(`Received form submission: Name - ${name}, Email - ${email}`);
    storedData.push({ name, email });
    res.send("Form submitted successfully!");
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
