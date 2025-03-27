import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn:
    process.env.NEXT_PUBLIC_SENTRY_DSN ||
    "https://7b883d075caa19b41fd9b00ae313a1c6@o4506813739368448.ingest.us.sentry.io/4507222371729408",
  tracesSampleRate: 1.0,
  debug: process.env.NODE_ENV === "development",
  environment: process.env.NODE_ENV,
});
