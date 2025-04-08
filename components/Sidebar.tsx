"use client";

import { useRouter, usePathname } from "next/navigation";
import { FaUsers, FaCalendar } from "react-icons/fa";
import { CgUserlane } from "react-icons/cg";
import {
  MdChatBubble,
  MdDashboard,
  MdExplore,
  MdMoreHoriz,
} from "react-icons/md";
import { FcSearch, FcWorkflow } from "react-icons/fc";
import { IoMdNotifications } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { FaGoogleScholar } from "react-icons/fa6";

const links = [
  {
    path: "/dashboard/activity",
    icon: (isActive: boolean) => (
      <IoMdNotifications
        className={`text-xl mr-2 ${isActive ? "text-blue-500" : "text-white"}`}
      />
    ),
    label: "Activity",
  },
  {
    path: "/dashboard/more",
    icon: (isActive: boolean) => (
      <MdChatBubble
        className={`text-xl mr-2 ${isActive ? "text-blue-500" : "text-white"}`}
      />
    ),
    label: "Chats",
  },
  {
    path: "/dashboard/projects",
    icon: (isActive: boolean) => (
      <MdDashboard
        className={`text-xl mr-2 ${isActive ? "text-blue-500" : "text-white"}`}
      />
    ),
    label: "Projects",
  },
  {
    path: "/dashboard/board",
    icon: (isActive: boolean) => (
      <FcWorkflow
        className={`text-xl mr-2 ${isActive ? "text-blue-500" : "text-white"}`}
      />
    ),
    label: "Board",
  },
  {
    path: "/dashboard/repo",
    icon: (isActive: boolean) => (
      <MdExplore
        className={`text-xl mr-2 ${isActive ? "text-blue-500" : "text-white"}`}
      />
    ),
    label: "Explore",
  },
  {
    path: "/dashboard/people",
    icon: (isActive: boolean) => (
      <FaUsers
        className={`text-xl mr-2 ${isActive ? "text-blue-500" : "text-white"}`}
      />
    ),
    label: "People",
  },
  {
    path: "/dashboard/ama",
    icon: (isActive: boolean) => (
      <LuMessagesSquare
        className={`text-xl mr-2 ${isActive ? "text-blue-500" : "text-white"}`}
      />
    ),
    label: "AMA",
  },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <aside className="fixed w-20 h-screen bg-[#0b0b0A] text-white shadow z-50">
      <ul className="mt-12">
        {links.map((link, index) => (
          <li key={index} onClick={() => handleNavigation(link.path)}>
            <div
              className={`items-center hover:bg-gray-700 p-4 justify-center hover:border-l-4 hover:border-gray-700 ${
                pathname === link.path
                  ? "bg-gray-700 border-l-4 border-indigo-400"
                  : "border-l-4 border-[#0b0b0A]"
              }`}
            >
              {link.icon(pathname === link.path)}
              <p className="text-xs mt-2">{link.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
