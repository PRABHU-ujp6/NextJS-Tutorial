import Image from "next/image";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/User.jpeg"
          alt="An Image of User"
          width={400}
          height={400}
        />
      </div>
      <h1>Hi, I'm Akan</h1>
      <p>Working on a Blog Project</p>
    </section>
  );
}
