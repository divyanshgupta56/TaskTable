import {
  Box,
  Button,
  TextField,
  Typography,
  Modal,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CheckBox } from "@mui/icons-material";
import { setColumns } from "../store";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function TaskSearchBar() {
  const currentState = useSelector((state) => {
    return state.table;
  });
  const [colNames, setColumns] = useState(currentState.columns);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: "grid", rowGap: "16px", marginBottom: "32px" }}>
      {/*  */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
        }}
      >
        <Typography variant="h2" sx={{}}>
          Tasks
        </Typography>
        <Box sx={{ display: "flex", columnGap: "12px", padding: "8px 12px" }}>
          <Box>
            <Box
              sx={{
                border: "2px solid #000",
                display: "grid",
                placeContent: "center",
                borderRadius: "100%",
              }}
            >
              <GrFormPrevious />
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                border: "2px solid #000",
                display: "grid",
                placeContent: "center",
                borderRadius: "100%",
              }}
            >
              <GrFormNext />
            </Box>
          </Box>
        </Box>
      </Box>
      {/*  */}
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr auto" }}>
        <Box sx={{ display: "flex", columnGap: "24px" }}>
          <TextField
            size="small"
            placeholder={"Search"}
            sx={{
              width: "320px",
              height: "44px",
            }}
          />
          <Button
            onClick={handleOpen}
            sx={{
              display: "grid",
              placeContent: "center",
              gridTemplateColumns: "auto 1fr",
              border: "1px solid #D0D5DD",
              padding: "10px 16px",
              columnGap: "8px",
              height: "40px",
            }}
          >
            <BsFilter style={{ fontSize: "20px", color: "#344054" }} />
            <Typography variant="body2" sx={{ color: "#344054" }}>
              Filters
            </Typography>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <FormGroup>
                {Object.keys(colNames).map((key) => {
                  return (
                    <FormControlLabel
                      control={
                        <CheckBox
                          checked={colNames[key]}
                          onChange={(e) => {
                            setColumns({
                              ...colNames,
                              ...{ key: e.target.checked },
                            });
                          }}
                        />
                      }
                      label={key}
                    />
                  );
                })}
              </FormGroup>
              <Button
                onClick={() => {
                  dispatch(setColumns(colNames));
                }}
              >
                Submit
              </Button>
            </Box>
          </Modal>
          <Button
            sx={{
              display: "grid",
              placeContent: "center",
              gridTemplateColumns: "auto 1fr",
              border: "1px solid #D0D5DD",
              padding: "10px 16px",
              columnGap: "8px",
              height: "40px",
            }}
          >
            <FiCalendar style={{ fontSize: "20px", color: "#344054" }} />
            <Typography variant="body2" sx={{ color: "#344054" }}>
              Date/month
            </Typography>
          </Button>
        </Box>
        <Button
          sx={{
            backgroundColor: "#48BF84",
            height: "40px",
            borderRadius: "8px",
            padding: "16px 32px",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "24px",
              textTransform: "none",
            }}
          >
            + Add
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
export default TaskSearchBar;
