import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Signature = () => {
  return (
    <section className="signature">
      <motion.svg
        width="100%"
        height="200"
        viewBox="0 0 1703 546"
        initial="hidden"
        whileInView="visible"
      >
        <motion.path
          d="M700.391 89.6524C696.577 64.8596 669.326 43.748 648.738 33.0327C619.165 17.6408 583.059 13.6325 550.647 9.93782C466.587 0.355817 384.23 6.49794 300.825 19.3744C211.442 33.1739 107.987 46.6578 24.68 84.9341C20.1005 87.0382 -5.26598 98.2929 10.525 107.532C48.4727 129.736 109.34 128.66 151.081 134.352C290.945 153.425 433.959 179.893 560.332 246.102C637.637 286.603 744.727 374.365 654.45 459.171C613.303 497.824 559.27 516.874 504.706 527.214C413.532 544.49 315.55 544.814 224.587 526.22C157.72 512.552 -19.9571 461.996 80.058 368.281C171.441 282.654 314.173 250.309 432.938 226.98C534.541 207.022 636.791 197.944 739.628 187.992C756.327 186.376 859.094 159.474 833.994 199.912C819.914 222.596 735.604 338.162 788.301 354.871C827.614 367.336 887.532 324.791 916.689 303.715C950.577 279.217 981.73 248.855 1011.3 219.282C1016.14 214.444 1022.81 200.91 1031.17 201.402C1037.48 201.773 1038.44 213.414 1047.06 214.563C1060.75 216.388 1076.97 212.019 1088.78 205.375C1095.98 201.327 1122.95 169.679 1098.72 173.092C1030.7 182.671 942.155 311.081 1047.31 331.528C1142.36 350.01 1247.91 298.069 1330.66 258.022C1381.91 233.216 1452.24 202.594 1479.41 148.259C1488.86 129.364 1487.76 112.67 1463.27 124.916C1412.07 150.513 1362.68 200.612 1331.15 247.592C1320.9 262.879 1295.25 302.918 1310.3 322.588C1332.8 352.022 1430.65 287.469 1448.86 277.143C1482.92 257.836 1521.29 224.551 1559.62 213.818C1572.94 210.09 1551.23 260.645 1549.69 268.451C1531.21 361.855 1653.71 306.823 1697.2 290.801"
          stroke="white"
          style={{ strokeWidth: 10 }}
          stroke-linecap="round"
          variants={draw}
          fill="none"
        />
      </motion.svg>
    </section>
  );
};

export default Signature;
