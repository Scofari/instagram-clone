import { FC } from "react";
import {
  SuggestedFollower,
  SuggestedFollowersFooter,
  SwitchAccounts,
  suggestedFollowerSkeleton,
} from "../../components";
import { useSuggestedFollowers } from "../../hooks/useSuggestedFollowers";
import { getSuggestedFollowerDescription } from "../../utils/getSuggestedFollowerDescription";
import styles from "./SuggestedFollowers.module.scss";

const SuggestedFollowers: FC = () => {
  const { data: followers, isLoading } = useSuggestedFollowers();

  return (
    <div className={styles.suggestedFollowers}>
      <SwitchAccounts />
      <div className={styles.suggestions}>
        <span>Suggestions for you</span>
        <a href="#">See All</a>
      </div>
      {isLoading
        ? suggestedFollowerSkeleton
        : followers?.map((follower) => {
            const { username, id, authorProfile, avatar } = follower;
            return (
              <SuggestedFollower
                key={id}
                to={username}
                description={getSuggestedFollowerDescription(follower)}
                avatar={avatar}
                username={username}
                authorProfile={authorProfile}
              />
            );
          })}

      <SuggestedFollowersFooter />
    </div>
  );
};

export default SuggestedFollowers;
