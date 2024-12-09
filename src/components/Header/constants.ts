import { FirstLevelMenuItem } from "./types";

import RecognitionIcon from "../../assets/icons/Clap.svg?react";
import RewardsIcon from "../../assets/icons/Rewards.svg?react";
import GamificationIcon from "../../assets/icons/Gamification.svg?react";
import PerformanceManagementIcon from "../../assets/icons/PerformanceManagement.svg?react";
import DigitalSignageIcon from "../../assets/icons/DigitalSignage.svg?react";
import IntegrationsIcon from "../../assets/icons/Integrations.svg?react";
import SecurityIcon from "../../assets/icons/Security.svg?react";

export const menuItems: FirstLevelMenuItem[] = [
  {
    title: "Product",
    secondLevelItems: [
      { title: "Recognition", path: "#", icon: RecognitionIcon },
      { title: "Rewards", path: "#", icon: RewardsIcon },
      {
        title: "Gamification",
        path: "#",
        icon: GamificationIcon,
        thirdLevelItems: [
          { title: "Leaderboards", path: "#" },
          { title: "Newsflashes", path: "#" },
          { title: "Contest", path: "#" },
        ],
      },
      {
        title: "Performance Management",
        path: "#",
        icon: PerformanceManagementIcon,
      },
      {
        title: "Digital Signage",
        path: "#",
        icon: DigitalSignageIcon,
        thirdLevelItems: [
          { title: "Hardware", path: "#" },
          { title: "Content/Apps", path: "#" },
          { title: "Enterprise Management", path: "#" },
          { title: "Conference Room Displays", path: "#" },
        ],
      },
      { title: "Integrations", path: "#", icon: IntegrationsIcon },
      { title: "Security", path: "#", icon: SecurityIcon },
    ],
  },
  // {
  //   title: "Solutions",
  //   secondLevelItems: [
  //     { title: "Recognition", path: "#" },
  //     { title: "Rewards", path: "#" },
  //     { title: "Gamification", path: "#" },
  //     { title: "Leaderboards", path: "#" },
  //     { title: "Newsflashes", path: "#" },
  //     { title: "Contest", path: "#" },
  //     { title: "Performance Management", path: "#" },
  //     { title: "Digital Signage", path: "#" },
  //     { title: "Integrations", path: "#" },
  //     { title: "Security", path: "#" },
  //   ],
  // },
  { title: "Resources" },
  { title: "Partners" },
  { title: "Landing Page" },
  { title: "Contact Sales" },
];
