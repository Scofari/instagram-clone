import { useQuery } from "@tanstack/react-query";
import { useState, FC } from "react";
import { IPost } from "../../types/post.interface";
import UserItem from "../UserItem";
import UserListFooter from "../UserListFooter";
import styles from "./UserList.module.scss";
import { getAllPosts, getSuggestedFollowers } from "../../api";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IUser } from "../../types/user.interface";
import { ISuggestedFollower } from "../../types/suggested-follower.interface";

const UserList: FC = () => {
  const currentUser = useSelector((state: RootState) => state.app.currentUser);
  const [isFollowing, setIsFollowing] = useState(false);
  const { data = [] } = useQuery(
    ["suggested-followers"],
    getSuggestedFollowers
  );

  const getSuggestedFollowerDescription = ({
    followedBy,
    followsYou,
  }: ISuggestedFollower) => {
    if (followsYou) return "Follows you";
    if (followedBy.length) return `Followed by ${followedBy.join(",")}`;

    return "";
  };

  if (!currentUser) return null;

  return (
    <div className={styles.userList}>
      <UserItem
        username={currentUser.username}
        description={currentUser.username}
        action="Switch"
        avatar={currentUser.avatar}
        style={{ width: 55, height: 55 }}
        to={currentUser.username}
      />
      <div className={styles.suggestions}>
        <span>Suggestions for you</span>
        <a href="#">See All</a>
      </div>
      {data.map((user) => (
        <UserItem
          key={user.id}
          {...user}
          to={user.username}
          description={getSuggestedFollowerDescription(user)}
          setIsFollowing={() => setIsFollowing(!isFollowing)}
          action={!isFollowing ? "Follow" : "Unfollow"}
        />
      ))}

      <UserListFooter />
    </div>
  );
};

export default UserList;
