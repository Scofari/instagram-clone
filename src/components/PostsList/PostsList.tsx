import React from "react";
import avatar from "../../assets/vova.jpg";

import Post from "../Post";

import styles from "./PostsList.module.scss";

const PostsList = () => {
	const posts = [
		{
			avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
			userImg:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
			username: "Elon Musk",
			caption:
				"Some people don't like change, but you need to embrace change if the alternative is disaster.",
			likes: 777,
		},
		{
			avatar: "https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d",
			userImg:
				"https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d",
			username: "Bill Gates",
			caption: "Patience is a key element of success.",
			likes: 777,
		},
		{
			avatar: "https://cdnn1.img.armeniasputnik.am/img/1506/51/15065139_150:0:1044:984_1920x0_80_0_0_e01039280098cd91b89d2b71d41999e6.jpg",
			userImg:
				"https://cdnn1.img.armeniasputnik.am/img/1506/51/15065139_150:0:1044:984_1920x0_80_0_0_e01039280098cd91b89d2b71d41999e6.jpg",
			username: "Dwayne Johnson",
			caption:
				"I like to use the hard times in the past to motivate me today.",
			likes: 777,
		},
		{
			avatar: "https://media.vogue.co.uk/photos/61dda2e71bb9b719caedae94/2:3/w_2560%2Cc_limit/ew%2520x%2520macksfilm%2520british%2520vogue.jpg",
			userImg:
				"https://media.vogue.co.uk/photos/61dda2e71bb9b719caedae94/2:3/w_2560%2Cc_limit/ew%2520x%2520macksfilm%2520british%2520vogue.jpg",
			username: "Emma Watson",
			caption:
				"Feeling beautiful has nothing to do with what you look like, I promise.",
			likes: 777,
		},
		{
			avatar: "https://i.insider.com/60661e04902281001950aa7e?width=700",
			userImg: "https://i.insider.com/60661e04902281001950aa7e?width=700",
			username: "Scarlett Johansson",
			caption:
				"I’m happiest when I have something to focus my energy on.",
			likes: 777,
		},
	];

	return (
		<div className={styles.postsList}>
			{posts.map((post, index) => (
				<Post
					userImg={avatar}
					avatar={post.avatar}
					username={post.username}
					caption={post.caption}
					likes={post.likes}
					key={index}
				/>
			))}
			{/* <Post
				avatar={avatar}
				userImg={avatar}
				username="vladimir"
				caption="cold shower a day keeps the doctor away"
				likes: 777,
			/>
			<Post
				avatar={avatar}
				userImg={avatar}
				username="vladimir"
				caption="cold shower a day keeps the doctor away"
				likes: 777,
			/>
			<Post
				avatar={avatar}
				userImg={avatar}
				username="vladimir"
				caption="cold shower a day keeps the doctor away"
				likes: 777,
			/>
			<Post
				avatar={avatar}
				userImg={avatar}
				username="vladimir"
				caption="cold shower a day keeps the doctor away"
				likes: 777,
			/>
			<Post
				avatar={avatar}
				userImg={avatar}
				username="vladimir"
				caption="cold shower a day keeps the doctor away"
				likes: 777,
			/>
			<Post
				avatar={avatar}
				userImg={avatar}
				username="vladimir"
				caption="cold shower a day keeps the doctor away"
				likes: 777,
			/> */}
		</div>
	);
};

export default PostsList;
