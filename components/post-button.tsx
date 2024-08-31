"use client";

import { useFormStatus } from "react-dom";

export default function PostButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="gap-x-3 rounded-lg bg-blue-600 px-4 py-2 disabled:opacity-50"
      type="submit"
    >
      Submit
    </button>
  );
}
