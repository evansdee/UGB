import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./pages/Applayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Dasboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Test from "./pages/Test";
import RoomElement from "./pages/RoomElement";
import Room from "./features/rooms/Room";
import { names } from "./helper/data";
import { usePathLocation } from "./hooks/usePathLocation";
import Booking from "./pages/Booking";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SkeletonTheme } from "react-loading-skeleton";
import StateContextProvider from "./state/StateContext";
import GlobalStyles from "./styles/GlobalStyles";
import Summary from "./pages/Summary";
import { useEffect } from "react";
import Payment from "./pages/Payment";
import SignUpWidget from "./pages/SignUp";
import SignUp from "./pages/SignUp";
import UserDetailsProvider from "./hooks/UserDetails";
import ProtectedRoute from "./pages/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function AppPage() {
  const { location } = usePathLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="test" element={<Test />} />
      <Route element={<Applayout />}>
        <Route index element={<Navigate replace to="home" />} />

        <Route path="home" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="services" element={<Services />} />
        <Route path="booking" element={<Booking />} />
        <Route path="summary" element={<Summary />} />
        <Route path="payment" element={<Payment />} />

        <Route
          path="rooms"
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="modern-rooms" />} />

          {names.map((ele) => (
            <>
              <Route
                key={ele.path}
                path={ele.path}
                element={<RoomElement name={ele.name} />}
              />
              <Route
                key={ele.name}
                path={`${ele.path}/:id`}
                element={<Room name={ele.name} />}
              />
              {/* <Route path={`${ele.path}/:id/booking`} element={<Booking />} /> */}
              {/* </Route> */}
            </>
          ))}
        </Route>

        <Route path="dashboard" element={<Dasboard />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        pauseOnFocusLoss={false}
        theme="dark"
        transition:Flip
        rtl={false}
        toastStyle={{ padding: "0" }}
      />

      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <StateContextProvider>
          <GlobalStyles />
          <UserDetailsProvider>
            <BrowserRouter>
              <AppPage />
            </BrowserRouter>
          </UserDetailsProvider>
        </StateContextProvider>
      </SkeletonTheme>
    </QueryClientProvider>
  );
}
