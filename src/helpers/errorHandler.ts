import {toast} from "react-toastify";

export function errorHandler(error) {
    // const message = error?.["response"]?.["data"]?.["message"] || error?.message || "network error";
   const message = error?.response?.data?.non_field_errors?.[0] || error?.response?.data?.username?.[0] || error?.message || "network error";
    toast.error(message);
    console.log(message, 'message')
    if (message.toLowerCase() === "jwt expired") {
        localStorage.setItem("token", "");
        // localStorage.setItem("admin_data", "");
        window.location.reload();
        return "jwt expired";
    } else {
        return message;
    }
}