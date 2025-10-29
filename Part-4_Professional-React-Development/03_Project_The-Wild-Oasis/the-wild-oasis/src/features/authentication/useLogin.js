import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      console.log(user);
      navigate("/dashboard");
    },

    onError: (error) => {
      console.log("ERROR in login", error);
      toast.error("Invalid email or password");
    },
  });
  return { login, isLoading };
}
