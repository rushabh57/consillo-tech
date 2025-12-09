import { RouterProvider } from "react-router-dom"
import router from "./router"
import { ToastFace } from "toast-face";


  export default function App() {
    return (
      <>
        <ToastFace position="bottom-left" stack="queue" animation="slideUp" variant="crust" />
        <RouterProvider router={router} />
      </>
    );
  
}
