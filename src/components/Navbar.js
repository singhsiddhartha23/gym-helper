import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { borderBottom } from "@mui/system";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link
        to="/"
        alt="logo"
        style={{ width: "48px", height: "48px", matgin: "0 20px" }}
      >
        <img src={Logo}></img>
      </Link>
      <Stack direction="Row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
        {/* <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Exercises
        </Link> */}
        {/* <Link
          to="/information"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Information
        </Link> */}
      </Stack>
    </Stack>
  );
};

export default Navbar;
