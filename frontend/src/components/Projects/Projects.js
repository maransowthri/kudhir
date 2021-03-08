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
    account_number: "21837627836178236",
    ifsc_code: "GFDS5672132",
    bhim_upi_qr: "some/img/path",
    google_pay_qr: "some/img/path",
    phonepe_qr: "some/img/path",
    paypal_qr: "some/img/path",
    city: "Sivaganga",
    state: "Tamil Nadu",
    zipcode: "630561",
    images: ["/images/students.jpg", "/images/students1.jpg"],
    youtube_link: "https://www.youtube.com/kudir",
    instagram_link: "https://www.youtube.com/kudir",
    facebook_link: "https://www.youtube.com/kudir",
    twitter_link: "https://www.youtube.com/kudir",
    created_on: "06 Mar 2021",
    is_published: true,
    targeted_amount: 100000,
    received_amount: 34000,
    delivered_amount: 12000,
    members: [
      {
        name: "Karan Sasthiri K",
        bio: "Police Officer Sivaganga District",
        portfolio: "https://www.google.com",
      },
      {
        name: "Kaleeswaran R",
        bio: "Army Man Ksahmir",
        portfolio: "https://www.google.com",
      },
      {
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
    account_number: "21837627836178236",
    ifsc_code: "GFDS5672132",
    bhim_upi_qr: "some/img/path",
    google_pay_qr: "some/img/path",
    phonepe_qr: "some/img/path",
    paypal_qr: "some/img/path",
    city: "Sivaganga",
    state: "Tamil Nadu",
    zipcode: "630561",
    images: ["/images/students.jpg", "/images/students1.jpg"],
    youtube_link: "https://www.youtube.com/kudir",
    instagram_link: "https://www.youtube.com/kudir",
    facebook_link: "https://www.youtube.com/kudir",
    twitter_link: "https://www.youtube.com/kudir",
    created_on: "06 Mar 2021",
    is_published: true,
    targeted_amount: 100000,
    received_amount: 34000,
    delivered_amount: 12000,
    members: [
      {
        name: "Karan Sasthiri K",
        bio: "Police Officer Sivaganga District",
        portfolio: "https://www.google.com",
      },
      {
        name: "Kaleeswaran R",
        bio: "Army Man Ksahmir",
        portfolio: "https://www.google.com",
      },
      {
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
    account_number: "21837627836178236",
    ifsc_code: "GFDS5672132",
    bhim_upi_qr: "some/img/path",
    google_pay_qr: "some/img/path",
    phonepe_qr: "some/img/path",
    paypal_qr: "some/img/path",
    city: "Sivaganga",
    state: "Tamil Nadu",
    zipcode: "630561",
    images: ["/images/students.jpg", "/images/students1.jpg"],
    youtube_link: "https://www.youtube.com/kudir",
    instagram_link: "https://www.youtube.com/kudir",
    facebook_link: "https://www.youtube.com/kudir",
    twitter_link: "https://www.youtube.com/kudir",
    created_on: "06 Mar 2021",
    is_published: true,
    targeted_amount: 100000,
    received_amount: 34000,
    delivered_amount: 12000,
    members: [
      {
        name: "Karan Sasthiri K",
        bio: "Police Officer Sivaganga District",
        portfolio: "https://www.google.com",
      },
      {
        name: "Kaleeswaran R",
        bio: "Army Man Ksahmir",
        portfolio: "https://www.google.com",
      },
      {
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
    account_number: "21837627836178236",
    ifsc_code: "GFDS5672132",
    bhim_upi_qr: "some/img/path",
    google_pay_qr: "some/img/path",
    phonepe_qr: "some/img/path",
    paypal_qr: "some/img/path",
    city: "Sivaganga",
    state: "Tamil Nadu",
    zipcode: "630561",
    images: ["/images/students.jpg", "/images/students1.jpg"],
    youtube_link: "https://www.youtube.com/kudir",
    instagram_link: "https://www.youtube.com/kudir",
    facebook_link: "https://www.youtube.com/kudir",
    twitter_link: "https://www.youtube.com/kudir",
    created_on: "06 Mar 2021",
    is_published: true,
    targeted_amount: 100000,
    received_amount: 34000,
    delivered_amount: 12000,
    members: [
      {
        name: "Karan Sasthiri K",
        bio: "Police Officer Sivaganga District",
        portfolio: "https://www.google.com",
      },
      {
        name: "Kaleeswaran R",
        bio: "Army Man Ksahmir",
        portfolio: "https://www.google.com",
      },
      {
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
