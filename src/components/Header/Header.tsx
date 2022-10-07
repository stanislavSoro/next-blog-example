import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "/public/forge.svg";
import Link from "next/link";

export const Header: FC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="home" sx={{ mr: 1 }}>
          <Link href="/">
            <Logo />
          </Link>
        </IconButton>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end", gap: "16px" }}>
          <Link href="/about">
            <Button color="inherit">WHO WE ARE</Button>
          </Link>
          <Link href="/products-services">
            <Button color="inherit">PRODUCTS AND SERVICES</Button>
          </Link>
          <Link href="/development">
            <Button color="inherit">DEVELOPMENT</Button>
          </Link>
          <Link href="/resources">
            <Button color="inherit">RESOURCES</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);
