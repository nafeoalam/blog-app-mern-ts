import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Grid, Input } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import { IBlog } from ".";
import { PROTECTED_URL } from "config/axios.config";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

//#region If Nested Modal Needed

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

//#endregion

interface IProps {
  modalTitle: string;
  setBlogList: Dispatch<SetStateAction<IBlog[]>>;
}
interface IAddNewPostForm {
  title: string;
  content: string;
}

export default function AddBlogModal({ modalTitle, setBlogList }: IProps) {
  const [open, setOpen] = useState(false);

  const [addNewPostForm, setAddNewPostForm] = useState<IAddNewPostForm>({
    title: "",
    content: "",
  });

  const handleSubmit = async () => {
    try {
      const { data: newBlog } = await PROTECTED_URL.post("/blogs", {
        ...addNewPostForm,
      });

      setBlogList((oldArray: IBlog[]) => [...oldArray, newBlog]);
      setOpen(false);
    } catch (err) {
      console.log(err, "err");
    }
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>{modalTitle}</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "auto" }}>
          <h2 id="parent-modal-title">{modalTitle}</h2>
          <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
              <Input
                placeholder="Title"
                value={addNewPostForm?.title}
                onChange={(e) =>
                  setAddNewPostForm({
                    ...addNewPostForm,
                    title: e.currentTarget.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Input
                multiline={true}
                placeholder="Content"
                value={addNewPostForm?.content}
                onChange={(e) =>
                  setAddNewPostForm({
                    ...addNewPostForm,
                    content: e.currentTarget.value,
                  })
                }
                fullWidth
              />
            </Grid>

            <Grid item xs={6} md={8}>
              <LoadingButton
                size="small"
                color="primary"
                onClick={handleSubmit}
                loading={false}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
              >
                Save
              </LoadingButton>
            </Grid>
          </Grid>

          {/* <ChildModal /> */}
        </Box>
      </Modal>
    </div>
  );
}
