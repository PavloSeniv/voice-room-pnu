import { useRouter } from "next/router";

import About from "../../components/Room/About";
import instanse from "../../core/axios";

interface InstanceProps {
  fullname: any;
  username: string;
  about: string;
  url: string;
}

export const ProfilePage: React.FC<InstanceProps> = ({
  fullname,
  username,
  about,
  url,
}) => {
  const router = useRouter();
  console.log("Default" + router);

  url = "/todos";

  fullname = instanse.get("/todos/title");

  const { id } = router.query;

  console.log("Dynamic router" + router);
  return (
    <About
      fullname="Seniv Pavlo"
      username="Seniv"
      about="lorem10"
      avatarUrl="/static/img/index/main/avatar_placeholder.png"
    ></About>
  );
};

export default ProfilePage;
