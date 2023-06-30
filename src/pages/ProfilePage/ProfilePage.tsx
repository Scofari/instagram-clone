import { FC, useEffect, useState } from "react";
import {
  AiOutlineTable,
  BsBookmark,
  CgProfile,
  IoAddSharp,
} from "react-icons/all";
import { IconType } from "react-icons/lib";
import { NavLink, useParams } from "react-router-dom";
import { Highlight, ProfileHeader, ProfilePosts } from "../../components";
import { CircularPreloader } from "../../components/UI";
import { useTitle } from "../../hooks/useTitle";
import { useUser } from "../../hooks/useUser";
import { NotFound } from "../../pages";
import { setPosts } from "../../redux/postSlice";
import { useAppDispatch } from "../../redux/store";
import { getNavLinkPath } from "../../utils/getNavLinkPath";
import styles from "./ProfilePage.module.scss";

interface NavigationProfile {
  icon: IconType;
  title: string;
}

const navigationProfile: NavigationProfile[] = [
  { icon: AiOutlineTable, title: "POSTS" },
  { icon: BsBookmark, title: "SAVED" },
  { icon: CgProfile, title: "TAGGED" },
];

const ProfilePage: FC = () => {
  const [value, setValue] = useState(0);
  const { username = "" } = useParams();
  const { data: user, isLoading } = useUser(username);

  useTitle(`${username} |`);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setPosts(user.posts));
    }
  }, [user]);

  if (isLoading) return <CircularPreloader />;

  if (!user) return <NotFound />;

  return (
    <div className={styles.profile}>
      <ProfileHeader {...user} />

      <div className={styles.highlightList}>
        <Highlight icon={IoAddSharp} text="New" />
      </div>
      <div className={styles.navigation}>
        {navigationProfile.map((item: NavigationProfile, idx) => {
          const { icon: Icon, title } = item;
          return (
            <NavLink
              to={getNavLinkPath(title, username)}
              key={idx}
              onClick={() => setValue(idx)}
              className={`${styles.navItem} ${idx === value && styles.active}`}
            >
              <Icon />
              <li className={styles.navProfile}>{title}</li>
            </NavLink>
          );
        })}
      </div>
      <ProfilePosts userId={user.id} />
    </div>
  );
};

export default ProfilePage;
