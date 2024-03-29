import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineAreaChart, AiFillHome, AiFillPicture } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import { GiGasPump, GiHamburgerMenu, GiImperialCrown, GiSlipknot } from "react-icons/gi";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const router = useRouter();
  const push = (path) => {
    router.push(path);
  };
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref>
        <a
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            color: "white",
          }}
        >
          <AiFillHome /> Home
        </a>
      </Link>
      <Menu>
        <MenuButton>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              color: "white",
            }}
          >
            <GiHamburgerMenu />
            Pages
          </div>
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              push("/sijoituslaskuri");
            }}
          >
            <div className={styles.nappula}>
              <AiOutlineAreaChart /> Sijoituslaskuri
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              push("/porssiaukioloajat");
            }}
          >
            <div className={styles.nappula}>
              <AiOutlineAreaChart /> Pörssi aukioloajat
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              push("/onerepmaxcalc");
            }}
          >
            <div className={styles.nappula}>
              <CgGym /> One Rep Max
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              push("/polttoainelaskuri");
            }}
          >
            <div className={styles.nappula}>
              <GiGasPump /> Polttoainelaskuri
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              push("/nft");
            }}
          >
            <div className={styles.nappula}>
              <AiFillPicture /> Nft
            </div>
          </MenuItem>
        </MenuList>
      </Menu>
    </nav>
  );
};

  
