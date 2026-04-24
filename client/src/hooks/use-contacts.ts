import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertContact } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateContact() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContact) => {
      const res = await fetch(api.contacts.create.path, {
        method: api.contacts.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit form");
      }

      return api.contacts.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "We've received your inquiry and will contact you shortly.",
        variant: "default",
        className: "bg-green-600 text-white border-none",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
