import { useRouter } from "next/router";

import About from "../../components/Room/About";

export default function ProfilePage() {
  const router = useRouter();
  console.log("Default" + router);

  const { id } = router.query;

console.log("Dynamic router" + router);
  return <About></About>;
}
