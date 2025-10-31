import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);

      toast.success(
        "Account created successfully! Please verfiy the new account from the user's email address"
      );
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signup, isLoading };
}
