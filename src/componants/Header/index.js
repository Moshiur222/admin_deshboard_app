import React, { useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/images/logo.webp";
import moshiur from "../../assets/images/Moshiur.jpg";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { IoPerson } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import { BsShieldFillExclamation } from "react-icons/bs";
import Divider from "@mui/material/Divider";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [ishandleOpenNotificationDr, setishandleOpenNotificationDr] =
    useState(false);

  const [ishandleOpenMessageDr, setishandleOpenMessageDr] =
    useState(false);

  const [ishandleOpenOrderDr, setishandleOpenOrderDr] =
    useState(false);

  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(ishandleOpenNotificationDr);
  const openMessage = Boolean(ishandleOpenMessageDr);
  const openOrder = Boolean(ishandleOpenOrderDr);

  const handleOpenMyAccDr = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDr = () => {
    setAnchorEl(null);
  };

  const handleOpenNotificationDr = () => {
    setishandleOpenNotificationDr(true);
  };
  const handleCloseNotificationDr = () => {
    setishandleOpenNotificationDr(false);
  };

  const handleOpenMessageDr = () => {
    setishandleOpenMessageDr(true);
  };
  const handleCloseMessageDr = () => {
    setishandleOpenMessageDr(false);
  };

  const handleOpenOrderDr = () => {
    setishandleOpenOrderDr(true);
  };
  const handleCloseOrderDr = () => {
    setishandleOpenOrderDr(false);
  };

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/* logo wrapper */}
            <div className="col-sm-2 part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} />
                <span className="ml-2">HOTASH</span>
              </Link>
            </div>
            {/* menu wrapper */}
            <div className="col-sm-4 d-flex align-items-center part2">
              <Button className="rounded-circle">
                <MdMenuOpen />
              </Button>
              <SearchBox />
            </div>
            <div className="col-sm-6 d-flex align-items-center justify-content-end  part3">
              <Button className="rounded-circle" id="space">
                <MdOutlineLightMode />
              </Button>

              <Button className="rounded-circle" id="space">
                <IoCartOutline onClick={handleOpenOrderDr} />
                <Menu
                  anchorEl={ishandleOpenOrderDr}
                  id="Notification-menu"
                  open={openOrder}
                  onClose={handleCloseOrderDr}
                  onClick={handleCloseOrderDr}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="head pl-3 pb-0">
                    <h4>Orders(12)</h4>
                  </div>
                  <Divider className="mb-3" />

                  <div className="scroll">
                    <MenuItem>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseOrderDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseOrderDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseOrderDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseOrderDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseOrderDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="pl-2 pr-2 w-100">
                    <button className="btn-blue w-100">VIEW ALL ORDERS</button>
                  </div>
                </Menu>
              </Button>

              <Button className="rounded-circle" id="space">
                <MdOutlineMailOutline onClick={handleOpenMessageDr} />
                <Menu
                  anchorEl={ishandleOpenMessageDr}
                  id="Notification-menu"
                  open={openMessage}
                  onClose={handleCloseMessageDr}
                  onClick={handleCloseMessageDr}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="head pl-3 pb-0">
                    <h4>Messages (23)</h4>
                  </div>
                  <Divider className="mb-3" />

                  <div className="scroll">
                    <MenuItem>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMessageDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMessageDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMessageDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMessageDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMessageDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="pl-2 pr-2 w-100">
                    <button className="btn-blue w-100">VIEW ALL MESSAGES</button>
                  </div>
                </Menu>
              </Button>

              <Button className="rounded-circle" id="space">
                <FaRegBell onClick={handleOpenNotificationDr} />
                <Menu
                  anchorEl={ishandleOpenNotificationDr}
                  id="Notification-menu"
                  open={openNotifications}
                  onClose={handleCloseNotificationDr}
                  onClick={handleCloseNotificationDr}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="head pl-3 pb-0">
                    <h4>notifications (34)</h4>
                  </div>
                  <Divider className="mb-3" />

                  <div className="scroll">
                    <MenuItem onClick={handleCloseNotificationDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseNotificationDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseNotificationDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseNotificationDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseNotificationDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseNotificationDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={moshiur} />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Moshiur</b>
                            added to his favorite list
                            <b>Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky">few seconds ago!</p>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="pl-2 pr-2 w-100">
                    <button className="btn-blue w-100">VIEW ALL NOTIFICATIONS</button>
                  </div>
                </Menu>
              </Button>

              <div className="myAccwraper">
                <Button
                  className="myAcc d-flex align-items-center"
                  onClick={handleOpenMyAccDr}
                >
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src={moshiur} />
                    </span>
                  </div>
                  <div className="userInfo">
                    <h4>Moshiur Rahman</h4>
                    <p className="mb-0">@moshiur</p>
                  </div>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAcc}
                  onClose={handleCloseMyAccDr}
                  onClick={handleCloseMyAccDr}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleCloseMyAccDr}>
                    <ListItemIcon>
                      <IoPerson />
                    </ListItemIcon>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDr}>
                    <ListItemIcon>
                      <BsShieldFillExclamation />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem className="log" onClick={handleCloseMyAccDr}>
                    <ListItemIcon>
                      <IoMdLock />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
