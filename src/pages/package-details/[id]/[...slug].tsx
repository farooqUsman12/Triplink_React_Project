import { useRouter } from "next/router";
import { useEffect } from "react";

const Page404 = () => {
  const router = useRouter();
  const {
    push,
    query: { id },
  } = router;
  useEffect(() => {
    push(`/package-details/${id}`);
  }, [id, push]);

  return null;
};

export default Page404;
