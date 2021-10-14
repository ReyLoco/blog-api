import express from "express";
import UsersRoutes from "./routes/users.routes";

/********** APP *************/
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcom" });
});

app.use("/api/users", UsersRoutes);

export default app;

/********** APP *************/
