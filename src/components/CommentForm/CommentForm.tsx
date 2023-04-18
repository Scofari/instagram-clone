// // import React, { FC, useState } from "react";
// // import { BsEmojiSmile } from "react-icons/bs";
// // import Tooltip from "../UI/Tooltip";
// // import styles from "./CommentForm.module.scss";

// // interface CommentFormProps {
// //     isModalOpen?: boolean;
// // }

// // const CommentForm: FC<CommentFormProps> = ({ isModalOpen }) => {
// //     const [searchValue, setSearchValue] = useState("");

// //     return (
// //         <form className={styles.form} method="POST">
// //             {!isModalOpen ? (
// //                 <>
// //                     <input type="text" placeholder="Add a comment..." />
// //                     <Tooltip content="Emoji">
// //                         <BsEmojiSmile size={13} />
// //                     </Tooltip>
// //                 </>
// //             ) : (
// //                 <div className={styles.modalOpen}>
// //                     <Tooltip content="Emoji">
// //                         <BsEmojiSmile size={25} />
// //                     </Tooltip>
// //                     <input
// //                         type="text"
// //                         placeholder="Add a comment..."
// //                         onChange={(e) => setSearchValue(e.target.value)}
// //                     />
// //                     {searchValue && <span>Post</span>}
// //                 </div>
// //             )}
// //         </form>
// //     );
// // };

// // export default CommentForm;

// import React, { FC, useState } from "react";
// import { BsEmojiSmile } from "react-icons/bs";
// import Tooltip from "../UI/Tooltip";
// import styles from "./CommentForm.module.scss";

// interface CommentFormProps {
//     isModalOpen?: boolean;
// }

// const CommentForm: FC<CommentFormProps> = ({ isModalOpen }) => {
//     const [searchValue, setSearchValue] = useState("");

//     const emojiSizeStyle = !isModalOpen ? 13 : 25;

//     return (
//         <form className={styles.form} method="POST">
//             <div className={styles.commentForm}>
//                 <input
//                     type="text"
//                     placeholder="Add a comment..."
//                     onChange={(e) => setSearchValue(e.target.value)}
//                 />
//                 <div>
//                     {searchValue && <span>Post</span>}
//                     <Tooltip content="Emoji">
//                         <BsEmojiSmile size={emojiSizeStyle} />
//                     </Tooltip>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default CommentForm;

// import React, { FC, useState } from "react";
// import { BsEmojiSmile } from "react-icons/bs";
// import Tooltip from "../UI/Tooltip";
// import styles from "./CommentForm.module.scss";

// interface CommentFormProps {
//     isModalOpen?: boolean;
// }

// const CommentForm: FC<CommentFormProps> = ({ isModalOpen }) => {
//     const [searchValue, setSearchValue] = useState("");

//     return (
//         <form className={styles.form} method="POST">
//             {!isModalOpen ? (
//                 <>
//                     <input type="text" placeholder="Add a comment..." />
//                     <Tooltip content="Emoji">
//                         <BsEmojiSmile size={13} />
//                     </Tooltip>
//                 </>
//             ) : (
//                 <div className={styles.modalOpen}>
//                     <Tooltip content="Emoji">
//                         <BsEmojiSmile size={25} />
//                     </Tooltip>
//                     <input
//                         type="text"
//                         placeholder="Add a comment..."
//                         onChange={(e) => setSearchValue(e.target.value)}
//                     />
//                     {searchValue && <span>Post</span>}
//                 </div>
//             )}
//         </form>
//     );
// };

// export default CommentForm;

import React, { FC, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import Tooltip from "../UI/Tooltip";
import styles from "./CommentForm.module.scss";

interface CommentFormProps {
    isModalOpen?: boolean;
}

const CommentForm: FC<CommentFormProps> = ({ isModalOpen }) => {
    const [searchValue, setSearchValue] = useState("");

    const emojiSizeStyle = !isModalOpen ? 13 : 25;

    return (
        <form className={styles.form} method="POST">
            {isModalOpen ? (
                <div className={styles.commentForm}>
                    <Tooltip content="Emoji">
                        <BsEmojiSmile size={emojiSizeStyle} />
                    </Tooltip>
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <span>Post</span>
                </div>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    {searchValue && <span>Post</span>}
                    <Tooltip content="Emoji">
                        <BsEmojiSmile size={emojiSizeStyle} />
                    </Tooltip>
                </>
            )}
        </form>
    );
};

export default CommentForm;
