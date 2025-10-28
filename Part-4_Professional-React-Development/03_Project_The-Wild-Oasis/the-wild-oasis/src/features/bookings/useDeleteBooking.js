import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDelteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),

    onSuccess: (data) => {
      toast.success(`Booking  deleted successfully`);
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError: (err) => {
      toast.error("There was an error deleting the booking", err.message);
    },
  });

  return { deleteBooking, isDeletingBooking };
}
