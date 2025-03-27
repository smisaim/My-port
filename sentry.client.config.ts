import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn:
    process.env.NEXT_PUBLIC_SENTRY_DSN ||
    "https://832dd62e339cc33d8f1c39e22c052f3b@o4509039595880448.ingest.de.sentry.io/4509039599288400",
  tracesSampleRate: 1.0,
  debug: process.env.NODE_ENV === "development",
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  environment: process.env.NODE_ENV,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
      autoInject: true,
      showBranding: true,
    }),
  ],
});
