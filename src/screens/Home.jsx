import { Button } from "@mui/base";
import lc from "../localeContent";

function HomeScreen() {
  return (
    <>
      <h1>{lc.JULIE_KASH_LCSW}</h1>
      <h3>{lc.HOMEPAGE_INTRODUCTION}</h3>
      <Button>{lc.CHECK_INSURANCE_RATE_BUTTON}</Button>
    </>
  );
}

export default HomeScreen;
