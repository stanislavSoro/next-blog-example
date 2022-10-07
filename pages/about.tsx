import { NextPage } from "next/types";

const About: NextPage = () => {
  return (
    <>
      <h1>Who We Are</h1>
      <ul>
        <li>Section on mission vision, with images</li>
        <li>Where we work</li>
        <li>
          Company history section
          <ul>
            <li>Text and picture with company history</li>
          </ul>
        </li>
        <li>About staff and board</li>
        <li>Ownership details</li>
      </ul>
    </>
  );
};

export default About;
