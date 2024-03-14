import { Button } from "@mui/base";
import lc from "../localeContent";
import PageHeader from "../components/PageHeader/PageHeader";

function HomeScreen() {
  return (
    <>
      <PageHeader title={lc.JULIE_KASH_LCSW} />
      <h3>{lc.HOMEPAGE_INTRODUCTION}</h3>
      <Button>{lc.CHECK_INSURANCE_RATE_BUTTON}</Button>
    </>
  );
}

export default HomeScreen;
