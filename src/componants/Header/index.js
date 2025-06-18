import React, { useState } from 'react';
import { Link } from "react-router";
import logo from '../../assets/images/logo.webp';
import moshiur from '../../assets/images/Moshiur.jpg';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* logo wrapper */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo} />
                                <span className="ml-2">HOTASH</span>
                            </Link>
                        </div>
                        {/* menu wrapper */}
                        <div className="col-sm-4 d-flex align-items-center part2">
                            <Button className="rounded-circle"><MdMenuOpen/></Button>
                            <SearchBox/>
                        </div>
                         <div className="col-sm-6 d-flex align-items-center justify-content-end  part3">
                            <Button className="rounded-circle" id="space"><MdOutlineLightMode/></Button>
                            <Button className="rounded-circle" id="space"><IoCartOutline/></Button>
                            <Button className="rounded-circle" id="space"><MdOutlineMailOutline/></Button>
                            <Button className="rounded-circle" id="space"><FaRegBell/></Button>

                            <Button className = "myAcc d-flex align-items-center">
                                <div className="userImg">
                                    <span className="rounded-circle">
                                        <img src={moshiur}/>
                                    </span>
                                </div>
                                <div className="userInfo">
                                    <h4>Moshiur Rahman</h4>
                                    <p className="mb-0">@moshiur</p>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;