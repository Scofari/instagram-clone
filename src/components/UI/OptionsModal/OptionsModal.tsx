import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../../redux/postSlice";
import { useAppDispatch } from "../../../redux/store";
import Modal from "../Modal";
import styles from "./OptionModal.module.scss";

const myProfileOptions = [
  "Delete",
  "Edit",
  "Hide like count",
  "Turn off commenting",
  "Go to post",
  "Share to...",
  "Copy link",
  "Embed",
  "Cancel",
];

const postOptions = [
  "Report",
  "Unfollow",
  "Add to favorites",
  "Go to post",
  "Share to...",
  "Copy link",
  "Embed",
  "Cancel",
];

const cancelDataOptions = ["Delete", "Cancel"];

interface OptionsModalProps {
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  isPostOptions?: boolean;
}

const OptionsModal = ({ setOpenModal, isPostOptions }: OptionsModalProps) => {
  const defaultOptions = isPostOptions ? postOptions : myProfileOptions;
  const [initialData, setInitialData] = useState(defaultOptions);
  const [openCloseModal, setOpenCloseModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickHandlerOptions = (item: string, id?: number) => {
    switch (item) {
      case "Delete":
        setInitialData([]);
        setOpenCloseModal(true);
        if (id !== undefined) {
          dispatch(deletePost(id));
          navigate(-1);
        }

        break;

      case "Cancel":
        setOpenModal?.(false);
        break;

      default:
        break;
    }
  };

  return (
    <Modal setOpenModal={() => setOpenModal?.(false)}>
      <div className={styles.modalContent}>
        <ul>
          {initialData.map((item, idx) => (
            <li onClick={() => onClickHandlerOptions(item)} key={idx}>
              {item}
            </li>
          ))}

          {openCloseModal && (
            <Modal setOpenModal={() => setOpenCloseModal(true)}>
              <div className={styles.modalContent}>
                <div className={styles.modalText}>
                  <p>Delete post?</p>
                  <span>Are you sure you want to delete this post?</span>
                </div>
                <ul>
                  {cancelDataOptions.map((item, index) => (
                    <li
                      onClick={() => onClickHandlerOptions(item, 1)}
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Modal>
          )}
        </ul>
      </div>
    </Modal>
  );
};

export default OptionsModal;
