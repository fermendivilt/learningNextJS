import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "./TopBar.module.css";

const poppins = Poppins({ weight: "900", subsets: ["latin"] });

interface IProps {
  children: JSX.Element;
}

export default function TopBar({ children }: IProps) {
  return (
    <>
      <header className={`${styles.top_bar} ${poppins.className}`}>
        <div className={styles.contentLeft}>
          <Image
            src={"/../public/images/TruckLogo.png"}
            width={108}
            height={106}
            alt="Blue speeding truck"
          />
          <h2>Easy-Dispatch</h2>
        </div>

        <h1>Begin your trip!</h1>

        <div className={styles.contentRight}>
          <Image
            src={"/../public/images/FlexLogic.png"}
            width={229}
            height={82}
            alt="Flex Logic's new logo"
          />
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
