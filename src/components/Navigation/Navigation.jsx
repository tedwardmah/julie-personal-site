import "./Navigation.css";
import lc from "../../localeContent";

const navigationConfig = [
  { label: "Julie Kash, LCSW", path: "/" },
  // { label: lc.NAVIGATION.HOME, path: "/" },
  { label: lc.NAVIGATION.ABOUT, path: "/about" },
  { label: lc.NAVIGATION.FEES, path: "/fees" },
  { label: lc.NAVIGATION.FAQ, path: "/faq" },
  { label: lc.NAVIGATION.CONTACT, path: "/contact" },
];

function Navigation() {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        listStyleType: "none",
        borderBottom: "1px solid #00b894",
        paddingBottom: "16px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {navigationConfig.map((config) => (
        <li key={config.label}>
          <a href={config.path}>{config.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
