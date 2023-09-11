"use client";
import { FlexColumn } from "@/components/common/flex";
import { Navigation } from "@/components/navigation";
import { MENU_CONSTANT } from "@/constants/menu";

const LandingPage = () => {
  return (
    <FlexColumn>
      <Navigation menu={MENU_CONSTANT} />
    </FlexColumn>
  );
};

export default LandingPage;
