import {useRouter} from "next/router";

import About from "../../components/pages/Profile";

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

    const {id} = router.query;
    console.log("Dynamic router" + router);

    return (
        <About
            fullname="Seniv Pavlo"
            username="Seniv"
            about="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur eaque fuga id incidunt molestiae nisi non, nostrum obcaecati possimus reiciendis, rerum tenetur voluptas. At beatae dolores, eaque excepturi illum inventore laborum minima molestias numquam quidem reiciendis repellat, saepe sapiente, suscipit vitae. Animi assumenda cum delectus dolor nemo soluta veritatis?"
            avatarUrl="/static/img/index/main/avatar_placeholder.png"
        />
    );
};

export default ProfilePage;
