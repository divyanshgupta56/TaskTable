import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FiFile } from "react-icons/fi";
import { IoLinkSharp } from "react-icons/io5";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { create } from "@mui/material/styles/createTransitions";
import gem from "../assets/images/gem.svg";
import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useScrollTrigger,
} from "@mui/material";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineCalendar,
} from "react-icons/ai";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers";

// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
function createData(
  srNo,
  task,
  project,
  pImpact,
  effort,
  clarity,
  owner,
  badges,
  dueDate,
  allotmentDate,
  status,
  files,
  links,
  submissionApproval,
  additionalInfo,
  isEditable
) {
  return {
    srNo,
    task,
    project,
    pImpact,
    effort,
    clarity,
    owner,
    badges,
    dueDate,
    allotmentDate,
    status,
    files,
    links,
    submissionApproval,
    additionalInfo,
    isEditable,
  };
}
function TaskCol(row) {
  if (row.isEditable) {
    return (
      <Box>
        <TextField
          size="small"
          //   sx={{ width: "100px", height: "40px" }}
          placeholder={"Enter task title"}
        />
      </Box>
    );
  } else {
    return <Typography>{row.task}</Typography>;
  }
}
function ProjectCol({ row }) {
  const [project, setProject] = React.useState("");
  const handleChange = (event) => {
    setProject(event.target.value);
  };
  if (row.isEditable) {
    return (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        {/* <InputLabel>Project</InputLabel> */}
        <Select
          value={project}
          onChange={handleChange}
          label="Project"
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em
              style={{ fontsize: "14px", fontWeight: "400", color: "#667085" }}
            >
              Select Project
            </em>
          </MenuItem>
          <MenuItem value={"Project 1"}>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "400", color: "#667085" }}
            >
              Project 1
            </Typography>
          </MenuItem>
          <MenuItem value={"Project 2"}>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "400", color: "#667085" }}
            >
              Project 2
            </Typography>
          </MenuItem>
          <MenuItem value={"Project 3"}>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "400", color: "#667085" }}
            >
              Project 3
            </Typography>
          </MenuItem>
          <MenuItem value={"Project 4"}>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "400", color: "#667085" }}
            >
              Project 4
            </Typography>
          </MenuItem>
        </Select>
      </FormControl>
    );
  } else {
    return (
      <Typography
        sx={{ fontSize: "14px", fontWeight: "400", color: "#667085" }}
      >
        {row.project}
      </Typography>
    );
  }
}
function PImpact({ row }) {
  function pill(impact) {
    let bgColor;
    let color;
    let text;
    switch (impact) {
      case "Extreme":
        bgColor = "#FEF3F2";
        color = "#F04438";
        text = "Extreme";
        break;
      case "High":
        bgColor = "#FFFAEB";
        color = "#F79009";
        text = "High";
        break;
      case "VeryHigh":
        bgColor = "#FFF6ED";
        color = "#FB6514";
        text = "Very High";
        break;
      case "Low":
        bgColor = "#F9FAFB";
        color = "#667085";
        text = "Low";
        break;
    }
    return (
      <Box
        sx={{
          padding: "2px 10px",
          borderRadius: "16px",
          backgroundColor: bgColor,
          display: "grid",
          placeContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: "600", color: color }}>
          {text}
        </Typography>
      </Box>
    );
  }
  const [impact, setImpact] = React.useState("");
  const handleChange = (event) => {
    setImpact(event.target.value);
  };
  if (row.isEditable) {
    return (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        {/* <InputLabel>P-Impact</InputLabel> */}
        <Select
          value={impact}
          onChange={handleChange}
          label="p-impact"
          displayEmpty
        >
          <MenuItem value="">
            <em
              style={{ fontsize: "14px", fontWeight: "400", color: "#667085" }}
            >
              Not Set
            </em>
          </MenuItem>
          <MenuItem value={"Extreme"}>{pill("Extreme")}</MenuItem>
          <MenuItem value={"High"}>{pill("High")}</MenuItem>
          <MenuItem value={"VeryHigh"}>{pill("VeryHigh")}</MenuItem>
          <MenuItem value={"Low"}>{pill("Low")}</MenuItem>
        </Select>
      </FormControl>
    );
  } else {
    return <Box>{pill(row.pImpact)}</Box>;
  }
}

function EffortPill({ row }) {
  function pill(effort) {
    return (
      <Box
        sx={{ display: "grid", placeContent: "center", padding: "16px 24px" }}
      >
        <Typography
          sx={{ fontSize: "14px", fontWeight: "400", color: "#667085" }}
        >
          {effort}
        </Typography>
      </Box>
    );
  }
  const [effort, setEffort] = React.useState("");
  const handleChange = (event) => {
    setEffort(event.target.value);
  };
  if (row.isEditable) {
    return (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        {/* <InputLabel>P-Impact</InputLabel> */}
        <Select value={effort} onChange={handleChange} label="-" displayEmpty>
          <MenuItem value="">
            <em
              style={{
                fontsize: "140px",
                fontWeight: "400",
                color: "#667085",
              }}
            >
              -
            </em>
          </MenuItem>
          <MenuItem value={"1D"}>{pill("1D")}</MenuItem>
          <MenuItem value={"2D"}>{pill("2D")}</MenuItem>
          <MenuItem value={"3D"}>{pill("3D")}</MenuItem>
          <MenuItem value={"4D"}>{pill("4D")}</MenuItem>
          <MenuItem value={"4D<"}>{pill("4D<")}</MenuItem>
        </Select>
      </FormControl>
    );
  } else {
    return <Box>{pill(row.effort)}</Box>;
  }
}

function ClarityPill({ row }) {
  function pill(clarity) {
    let bgColor;
    let color;
    let text;
    switch (clarity) {
      case "High":
        bgColor = "#ECFDF3";
        color = "#12B76A";
        text = "High";
        break;
      case "Medium":
        bgColor = "#FFF6ED";
        color = "#FB6514";
        text = "Medium";
        break;
      case "Low":
        bgColor = "#FFFAEB";
        color = "#F79009";
        text = "Low";
        break;
    }
    return (
      <Box
        sx={{
          padding: "2px 10px",
          borderRadius: "16px",
          backgroundColor: bgColor,
          display: "grid",
          placeContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: "600", color: color }}>
          {text}
        </Typography>
      </Box>
    );
  }
  const [clarity, setClarity] = React.useState("");
  const handleChange = (event) => {
    setClarity(event.target.value);
  };
  if (row.isEditable) {
    return (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        {/* <InputLabel>P-Impact</InputLabel> */}
        <Select
          value={clarity}
          onChange={handleChange}
          label="Clarity"
          displayEmpty
        >
          <MenuItem value="">
            <em
              style={{ fontsize: "14px", fontWeight: "400", color: "#667085" }}
            >
              Not Set
            </em>
          </MenuItem>

          <MenuItem value={"High"}>{pill("High")}</MenuItem>
          <MenuItem value={"Medium"}>{pill("Medium")}</MenuItem>
          <MenuItem value={"Low"}>{pill("Low")}</MenuItem>
        </Select>
      </FormControl>
    );
  } else {
    return <Box>{pill(row.clarity)}</Box>;
  }
}

function StatusPill({ row }) {
  function pill(status) {
    let bgColor;
    let color;
    let text;
    switch (status) {
      case "Completed":
        bgColor = "#ECFDF3";
        color = "#12B76A";
        text = "Completed";
        break;
      case "InProgress":
        bgColor = "#FFFAEB";
        color = "#F79009";
        text = "In Progress";
        break;
      case "Upcoming":
        bgColor = "#F0F9FF";
        color = "#0BA5EC";
        text = "Upcoming";
        break;
      case "NotStarted":
        bgColor = "#F9FAFB";
        color = "#667085";
        text = "Not Started";
        break;
      case "OnHold":
        bgColor = "#FEF3F2";
        color = "#F04438";
        text = "On Hold";
        break;
    }
    return (
      <Box
        sx={{
          padding: "2px 0px",
          borderRadius: "16px",
          backgroundColor: bgColor,
          display: "grid",
          placeContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: "600", color: color }}>
          {text}
        </Typography>
      </Box>
    );
  }
  const [status, setStatus] = React.useState("");
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  if (row.isEditable) {
    return (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        {/* <InputLabel>P-Impact</InputLabel> */}
        <Select
          value={status}
          onChange={handleChange}
          label="Project"
          displayEmpty
        >
          <MenuItem value="">
            <em
              style={{ fontsize: "14px", fontWeight: "400", color: "#667085" }}
            >
              Not Started
            </em>
          </MenuItem>
          <MenuItem value={"Completed"}>{pill("Completed")}</MenuItem>
          <MenuItem value={"InProgress"}>{pill("InProgress")}</MenuItem>
          <MenuItem value={"Upcoming"}>{pill("Upcoming")}</MenuItem>
          <MenuItem value={"NotStarted"}>{pill("NotStarted")}</MenuItem>
          <MenuItem value={"OnHold"}>{pill("OnHold")}</MenuItem>
        </Select>
      </FormControl>
    );
  } else {
    return <Box>{pill(row.status)}</Box>;
  }
}

function SubmissionPill({ row }) {
  function pill(submission) {
    let bgColor;
    let color;
    let text;
    switch (submission) {
      case "Approved":
        bgColor = "#ECFDF3";
        color = "#12B76A";
        text = "Approved";
        break;
      case "Pending":
        bgColor = "#FFFAEB";
        color = "#F79009";
        text = "Pending";
        break;
    }
    return (
      <Box
        sx={{
          padding: "2px 0px",
          borderRadius: "16px",
          backgroundColor: bgColor,
          display: "grid",
          placeContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: "600", color: color }}>
          {text}
        </Typography>
      </Box>
    );
  }
  const [submission, setSubmission] = React.useState("");
  const handleChange = (event) => {
    setSubmission(event.target.value);
  };
  if (row.isEditable) {
    return (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        {/* <InputLabel>P-Impact</InputLabel> */}
        <Select value={submission} onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <em>{pill("Pending")}</em>
          </MenuItem>
          <MenuItem value={"Approved"}>{pill("Approved")}</MenuItem>
          <MenuItem value={"Pending"}>{pill("Pending")}</MenuItem>
        </Select>
      </FormControl>
    );
  } else {
    return <Box>{pill(row.submissionApproval)}</Box>;
  }
}

function FilePill({ row }) {
  if (row.files.length === 0) {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          alignItems: "center",
        }}
      >
        <FiFile style={{ fontSize: "24px" }} />
        <AiOutlinePlusCircle style={{ color: "#667085", fontSize: "24px" }} />
      </Box>
    );
  } else
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          alignItems: "center",
        }}
      >
        <FiFile style={{ fontSize: "24px" }} />
        <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
          {row.files.length}
        </Typography>
      </Box>
    );
}
function LinkPill({ row }) {
  if (row.links.length === 0) {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          alignItems: "center",
        }}
      >
        <IoLinkSharp style={{ fontSize: "24px" }} />
        <AiOutlinePlusCircle style={{ color: "#667085", fontSize: "24px" }} />
      </Box>
    );
  } else
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          alignItems: "center",
        }}
      >
        <IoLinkSharp style={{ fontSize: "24px" }} />
        <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
          {row.links.length}
        </Typography>
      </Box>
    );
}
function BadgesCol({ row }) {
  const [badges, setBadges] = React.useState(0);
  function increase() {
    setBadges(badges + 1);
  }
  function decrease() {
    if (badges > 0) setBadges(badges - 1);
  }
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "auto 1fr auto" }}>
      <Box
        onClick={decrease}
        sx={{
          display: "grid",
          placeContent: "center",
        }}
      >
        <AiOutlineMinusCircle style={{ color: "#A6F4C5", fontSize: "24px" }} />
      </Box>
      <Box
        sx={{
          display: "grid",
          placeContent: "center",
          gridTemplateColumns: "auto 1fr",
          //   width: "30px",
          mx: "10px",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
          {badges}
        </Typography>
        <img src={gem} />
      </Box>
      <Box
        onClick={increase}
        sx={{
          display: "grid",
          placeContent: "center",
        }}
      >
        <AiOutlinePlusCircle style={{ color: "#A6F4C5", fontSize: "24px" }} />
      </Box>
    </Box>
  );
}
function DueDateCol({ row }) {
  const [date, setDate] = React.useState("");
  if (row.isEditable) {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <AiOutlineCalendar style={{ color: "#667085", fontSize: "24px" }} />
          <AiOutlinePlusCircle style={{ color: "#667085", fontSize: "24px" }} />
        </Box>
        <DatePicker
          sx={{ display: "none" }}
          selected={date}
          onChange={(date) => setDate(date)}
        ></DatePicker>
      </>
    );
  } else
    return (
      <Box>
        <Typography
          sx={{ fontSize: "14px", fontWeight: "500", color: "#667085" }}
        >
          {row.dueDate}
        </Typography>
      </Box>
    );
}
function AllotmentDateCol({ row }) {
  const [date, setDate] = React.useState("");
  if (row.isEditable) {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <AiOutlineCalendar style={{ color: "#667085", fontSize: "24px" }} />
          <AiOutlinePlusCircle style={{ color: "#667085", fontSize: "24px" }} />
        </Box>
        <DatePicker
          sx={{ display: "none" }}
          selected={date}
          onChange={(date) => setDate(date)}
        ></DatePicker>
      </>
    );
  } else
    return (
      <Box>
        <Typography
          sx={{ fontSize: "14px", fontWeight: "500", color: "#667085" }}
        >
          {row.allotmentDate}
        </Typography>
      </Box>
    );
}
function OwnerCol({ row }) {
  const [name, setName] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  function profileTab(name, avatar) {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          columnGap: "5px",
          alignItems: "center",
          width: "fit-content",
        }}
      >
        <Avatar src={avatar} sx={{ width: "20px", height: "20px" }} />
        <Typography
          sx={{ fontSize: "14px", fontWeight: "400", color: "#667085" }}
        >
          {name}
        </Typography>
      </Box>
    );
  }
  if (row.isEditable) {
    return (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        {/* <InputLabel>P-Impact</InputLabel> */}
        <Select
          value={name}
          //   onChange={handleChange}
          label="p-impact"
          displayEmpty
        >
          <MenuItem value="">{profileTab("Not Assigned", "avatar")}</MenuItem>
          <MenuItem value={"Profile1"}>
            {profileTab("Name1", "avatar")}
          </MenuItem>
          <MenuItem value={"Profile2"}>
            {profileTab("name2", "avatar")}
          </MenuItem>
          <MenuItem value={"Profile3"}>
            {profileTab("Name3", "avatar")}
          </MenuItem>
          <MenuItem value={"Profile4"}>
            {profileTab("Name4", "avatar")}
          </MenuItem>
        </Select>
      </FormControl>
    );
  } else
    return (
      <Box sx={{ display: "grid", justifyContent: "center" }}>
        {" "}
        {profileTab(row.owner.name, row.owner.avatar)}
      </Box>
    );
}
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>{row.srNo}</TableCell>
        <TableCell component="th" scope="row">
          <Box sx={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>{" "}
            {TaskCol(row)}
          </Box>
        </TableCell>
        <TableCell align="center">{<ProjectCol row={row} />}</TableCell>
        <TableCell align="center">{<PImpact row={row} />}</TableCell>
        <TableCell align="center">{<EffortPill row={row} />}</TableCell>
        <TableCell align="center">{<ClarityPill row={row} />}</TableCell>
        <TableCell align="center">{<OwnerCol row={row} />}</TableCell>
        <TableCell align="center">{<BadgesCol row={row} />}</TableCell>
        <TableCell align="center">{<DueDateCol row={row} />}</TableCell>
        <TableCell align="center">{<AllotmentDateCol row={row} />} </TableCell>
        <TableCell align="center">{<StatusPill row={row} />}</TableCell>
        <TableCell align="center">{<FilePill row={row} />}</TableCell>
        <TableCell align="center">{<LinkPill row={row} />}</TableCell>
        <TableCell align="center">{<SubmissionPill row={row} />}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Additional {row.dueDate}
              </Typography>

              <Table size="small" aria-label="purchases">
                {/* <TableBody>{row.additionalInfo.additionalInfo}</TableBody> */}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

const rows = [
  createData(
    1,
    "Review request",
    "P-management:\nInternal team prod",
    "Extreme",
    "2D",
    "High",
    { avatar: "", name: "name" },
    0,
    "2 Aug 23",
    "10 Sep 23",
    "Completed",
    [],
    [],
    "Pending",
    { AdditionInfo: "Additional Info" },
    true
  ),
  createData(
    1,
    "Review request",
    "P-management:\nInternal team prod",
    "Extreme",
    "2D",
    "High",
    { avatar: "", name: "name" },
    0,
    "2 Aug 23",
    "10 Sep 23",
    "Completed",
    [],
    [],
    "Pending",
    { AdditionInfo: "Additional Info" },
    false
  ),
];

function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead sx={{ backgroundColor: "#F2F4F7" }}>
          <TableRow>
            <TableCell>Sr No</TableCell>

            <TableCell sx={{ minWidth: "300px" }}>Tasks</TableCell>
            <TableCell align="center">project</TableCell>
            <TableCell align="center">P-Impact</TableCell>
            <TableCell align="center">Effort</TableCell>
            <TableCell align="center">Clarity</TableCell>
            <TableCell align="center" sx={{ minWidth: "200px" }}>
              Owner
            </TableCell>
            <TableCell align="center">Badges</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="center">Allotment Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Files</TableCell>
            <TableCell align="center">Links</TableCell>
            <TableCell align="center">Submission approval</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.srNo} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function TaskTable() {
  return <CollapsibleTable />;
}
export default TaskTable;
