import app from "./source/app.js";
import { env } from "./source/config/env.js";

app.listen(env.PORT, () => {
  console.log(`🚀 Server running on port ${env.PORT}`);
});