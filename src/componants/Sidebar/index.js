import Button from "@mui/material/Button";
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router";
import { useState } from "react";
import { IoMdLogOut } from "react-icons/io";


const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [isTogoledSubmenu, setisTogoledSubmenu] = useState(false);
    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setisTogoledSubmenu(!isTogoledSubmenu);
    };

    return (
        <>
            <div className="sidebar">
                <ul>
                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 0 && isTogoledSubmenu === true ? 'active' : ''}`}  onClick={()=> isOpenSubmenu(0)}>
                                <span className="icon">
                                    <MdDashboard />
                                </span>
                                Dashboard
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <li>
                        <Button className={`w-100 ${activeTab === 1 && isTogoledSubmenu === true ? 'active' : ''}`}  onClick={()=> isOpenSubmenu(1)}>
                            <span className="icon">
                                <FaProductHunt />
                            </span>
                            Products
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 1 && isTogoledSubmenu === true ? 'colapse' : 'colapsed'}`}>
                            <ul className="submenu">
                                <li><Link to='#'>Product List</Link></li>
                                <li><Link to='#'>Product View</Link></li>
                                <li><Link to='#'>Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 2 && isTogoledSubmenu === true ? 'active' : ''}`}  onClick={()=> isOpenSubmenu(2)}>
                                <span className="icon">
                                    <IoMdCart />
                                </span>
                                Orders
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 3 && isTogoledSubmenu === true ? 'active' : ''}`} onClick={()=> isOpenSubmenu(3)}>
                                <span className="icon">
                                    <MdEmail />
                                </span>
                                Messages
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 4 && isTogoledSubmenu === true ? 'active' : ''}`} onClick={()=> isOpenSubmenu(4)}>
                                <span className="icon">
                                    <FaBell />
                                </span>
                                Notifications
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 5 && isTogoledSubmenu === true ? 'active' : ''}`} onClick={()=> isOpenSubmenu(5)}>
                                <span className="icon">
                                    <IoMdSettings />
                                </span>
                                Settings
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 6 && isTogoledSubmenu === true ? 'active' : ''}`} onClick={()=> isOpenSubmenu(6)}>
                                <span className="icon">
                                    <MdDashboard />
                                </span>
                                Dashboard
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 7 && isTogoledSubmenu === true ? 'active' : ''}`} onClick={()=> isOpenSubmenu(7)}>
                                <span className="icon">
                                    <FaProductHunt />
                                </span>
                                Products
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 8 && isTogoledSubmenu === true ? 'active' : ''}`} onClick={()=> isOpenSubmenu(8)}>
                                <span className="icon">
                                    <IoMdCart />
                                </span>
                                Orders
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 9 && isTogoledSubmenu === true ? 'active' : ''}`}     onClick={()=> isOpenSubmenu(9)}>
                                <span className="icon">
                                    <MdEmail />
                                </span>
                                Messages
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 10 && isTogoledSubmenu === true ? 'active' : ''}`} onClick={()=> isOpenSubmenu(10)}>
                                <span className="icon">
                                    <FaBell />
                                </span>
                                Notifications
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 11 && isTogoledSubmenu === true ? 'active' : ''}`} onClick={()=> isOpenSubmenu(11)}>
                                <span className="icon">
                                    <IoMdSettings />
                                </span>
                                Settings
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 12 && isTogoledSubmenu === true ? 'active' : ''}`}    onClick={()=> isOpenSubmenu(12)}>
                                <span className="icon">
                                    <MdDashboard />
                                </span>
                                Dashboard
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className= {`w-100  ${activeTab === 13 && isTogoledSubmenu === true ? 'active' : ''}`} onClick={()=> isOpenSubmenu(13)}>
                                <span className="icon">
                                    <FaProductHunt />
                                </span>
                                Products
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 14 && isTogoledSubmenu === true ? 'active' : ''}`} onClick={()=> isOpenSubmenu(14)}>
                                <span className="icon">
                                    <IoMdCart />
                                </span>
                                Orders
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 15 && isTogoledSubmenu === true ? 'active' : ''}`}    onClick={()=> isOpenSubmenu(15)}>
                                <span className="icon">
                                    <MdEmail />
                                </span>
                                Messages
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 16 && isTogoledSubmenu === true ? 'active' : ''}`} onClick={()=> isOpenSubmenu(16)}>
                                <span className="icon">
                                    <FaBell />
                                </span>
                                Notifications
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>

                    <Link to='/'>
                        <li>
                            <Button className={`w-100  ${activeTab === 17 && isTogoledSubmenu === true ? 'active' : ''}`}    onClick={()=> isOpenSubmenu(17)}>
                                <span className="icon">
                                    <IoMdSettings />
                                </span>
                                Settings
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </li>
                    </Link>
                </ul>
                <br />
                <div className="logoutWrapper">
                    <div className="logoutBox">
                        <Button variant="contained"><IoMdLogOut/>Logout</Button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Sidebar;
