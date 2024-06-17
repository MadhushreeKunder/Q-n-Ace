import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AccessProvider } from "./context/AccessContext";
import CategoryPage from "./pages/CategoryPage";
import ErrorPage from "./pages/ErrorPage";
import FeedbackPage from "./pages/FeedbackPage";
import InterviewPage from "./pages/InterviewPage";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./pages/RootLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/category", element: <CategoryPage /> },
      {
        path: "/interview",
        element: <ProtectedRoute element={<InterviewPage />} />,
      },
      {
        path: "/feedback",
        element: <ProtectedRoute element={<FeedbackPage />} />,
      },
      { path: "/*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return (
    <AccessProvider>
      <RouterProvider router={router} />
    </AccessProvider>
  );
}

export default App;
