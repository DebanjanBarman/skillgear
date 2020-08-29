const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

const courseRouter = require("./routes/courseRoutes");
const userRouter = require("./routes/userRoutes");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();
app.use(express.static(`${__dirname}/../client/dist`));

//Global Middleware

app.use(helmet());

app.use(express.json({ limit: "10kb" }));

app.use(mongoSanitize());
app.use(xss());

app.use(cors({ origin: "*" }));
app.options("/api/v1/", cors());

//Rate limiting
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from your IP",
});

app.use("/api", limiter);

// Routes
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
