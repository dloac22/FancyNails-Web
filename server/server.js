const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ---- production static serve (after you build React) ----
// app.use(express.static(path.join(__dirname, "..", "client", "dist")));
// app.get("*", (_, res) =>
//   res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"))
// );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
