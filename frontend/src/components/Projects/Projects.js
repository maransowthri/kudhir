import React from "react";

import Project from "./Project/Project";
import classes from "./Projects.module.css";

export const SAMPLE_PROJECTS = [
  {
    id: 1,
    slug: "karumanthakudi-high-school",
    name: "Karumanthakudi High School",
    description:
      "Students from Karumathakudi are struggling a lot to travel long distance by walk",
    bank_account_name: "Kudhir Foundation",
    bank_account_number: "21837627836178236",
    ifsc_code: "GFDS5672132",
    upi_id: "kudhir",
    upi_qr: "/images/qr.png",
    bitcoin_wallet_address: "asdkj8743ei0dasdw?0===",
    city: "Sivaganga",
    state: "Tamil Nadu",
    zipcode: "630561",
    images: ["/images/students.jpg", "/images/students1.jpg"],
    socials: [
      "https://www.youtube.com/kudir",
      "https://www.instagram.com/kudir",
      "https://www.facebook.com/kudir",
      "https://www.twitter.com/kudir",
    ],
    created_on: "06 Mar 2021",
    is_published: true,
    targeted_amount: 100000,
    received_amount: 34000,
    delivered_amount: 12000,
    members: [
      {
        id: 1,
        name: "Karan Sasthiri K",
        bio: "Police Officer Sivaganga District",
        portfolio: "https://www.google.com",
      },
      {
        id: 2,
        name: "Kaleeswaran R",
        bio: "Army Man Ksahmir",
        portfolio: "https://www.google.com",
      },
      {
        id: 3,
        name: "Mahesh Kannan R",
        bio: "Police Officer",
        portfolio: "https://www.google.com",
      },
    ],
  },
  {
    id: 2,
    slug: "thuraipakkam-high-school",
    name: "Thuraipakkam High School",
    description:
      "Students from Karumathakudi are struggling a lot to travel long distance by walk",
    bank_account_name: "Kudhir Foundation",
    bank_account_number: "21837627836178236",
    ifsc_code: "GFDS5672132",
    upi_id: "kudhir",
    upi_qr: "/images/qr.png",
    bitcoin_wallet_address: "jsheiwquyeiw9872493847",
    city: "Sivaganga",
    state: "Tamil Nadu",
    zipcode: "630561",
    images: ["/images/students.jpg", "/images/students1.jpg"],
    socials: [
      "https://www.youtube.com/kudir",
      "https://www.instagram.com/kudir",
      "https://www.facebook.com/kudir",
      "https://www.twitter.com/kudir",
    ],
    created_on: "06 Mar 2021",
    is_published: true,
    targeted_amount: 100000,
    received_amount: 34000,
    delivered_amount: 12000,
    members: [
      {
        id: 1,
        name: "Karan Sasthiri K",
        bio: "Police Officer Sivaganga District",
        portfolio: "https://www.google.com",
      },
      {
        id: 2,
        name: "Kaleeswaran R",
        bio: "Army Man Ksahmir",
        portfolio: "https://www.google.com",
      },
      {
        id: 3,
        name: "Mahesh Kannan R",
        bio: "Police Officer",
        portfolio: "https://www.google.com",
      },
    ],
  },
  {
    id: 3,
    slug: "karh",
    name: "Karumanthakudi High School",
    description:
      "Students from Karumathakudi are struggling a lot to travel long distance by walk",
    bank_account_name: "Kudhir Foundation",
    bank_account_number: "21837627836178236",
    ifsc_code: "GFDS5672132",
    upi_id: "kudhir",
    upi_qr: "/images/qr.png",
    bitcoin_wallet_address: "csjday*&6700==sdsdjh",
    city: "Sivaganga",
    state: "Tamil Nadu",
    zipcode: "630561",
    images: ["/images/students.jpg", "/images/students1.jpg"],
    socials: [
      "https://www.youtube.com/kudir",
      "https://www.instagram.com/kudir",
      "https://www.facebook.com/kudir",
      "https://www.twitter.com/kudir",
    ],
    created_on: "06 Mar 2021",
    is_published: true,
    targeted_amount: 100000,
    received_amount: 34000,
    delivered_amount: 12000,
    members: [
      {
        id: 1,
        name: "Karan Sasthiri K",
        bio: "Police Officer Sivaganga District",
        portfolio: "https://www.google.com",
      },
      {
        id: 2,
        name: "Kaleeswaran R",
        bio: "Army Man Ksahmir",
        portfolio: "https://www.google.com",
      },
      {
        id: 3,
        name: "Mahesh Kannan R",
        bio: "Police Officer",
        portfolio: "https://www.google.com",
      },
    ],
  },
  {
    id: 4,
    slug: "karh",
    name: "Karumanthakudi High School",
    description:
      "Students from Karumathakudi are struggling a lot to travel long distance by walk",
    bank_account_name: "Kudhir Foundation",
    bank_account_number: "21837627836178236",
    ifsc_code: "GFDS5672132",
    upi_id: "kudhir",
    upi_qr: "/images/qr.png",
    bitcoin_wallet_address: "csjday*&6700==sdsdjh",
    city: "Sivaganga",
    state: "Tamil Nadu",
    zipcode: "630561",
    images: ["/images/students.jpg", "/images/students1.jpg"],
    socials: [
      "https://www.youtube.com/kudir",
      "https://www.instagram.com/kudir",
      "https://www.facebook.com/kudir",
      "https://www.twitter.com/kudir",
    ],
    created_on: "06 Mar 2021",
    is_published: true,
    targeted_amount: 100000,
    received_amount: 34000,
    delivered_amount: 12000,
    members: [
      {
        id: 1,
        name: "Karan Sasthiri K",
        bio: "Police Officer Sivaganga District",
        portfolio: "https://www.google.com",
      },
      {
        id: 2,
        name: "Kaleeswaran R",
        bio: "Army Man Ksahmir",
        portfolio: "https://www.google.com",
      },
      {
        id: 3,
        name: "Mahesh Kannan R",
        bio: "Police Officer",
        portfolio: "https://www.google.com",
      },
    ],
  },
];

const Projects = (props) => {
  const projects = SAMPLE_PROJECTS.map((project) => (
    <Project key={project.id} project={project} />
  ));

  return (
    <>
      <div className={classes.Projects}>{projects}</div>
    </>
  );
};

export default Projects;
