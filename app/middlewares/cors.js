import cors from "cors";

const ACCEPTED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:1234",
  "http://localhost:3000",
  "https://movies.com",
];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: true /* (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    }, */,
  });
