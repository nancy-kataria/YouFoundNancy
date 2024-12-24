import { Head } from "$fresh/runtime.ts";
import ErrorPage from "../islands/ErrorPage.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <ErrorPage />
    </>
  );
}
