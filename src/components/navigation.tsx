import React from "react";
import { FlexBox, FlexRow } from "./common/flex";
import { Text } from "./common/text";

import { NavigationProps } from "@/interface/components/navigation";
import { Divider, Typography } from "antd";

export const Navigation: React.FC<NavigationProps> = (
  props: NavigationProps
) => {
  const { menu } = props;
  return (
    <>
      <FlexRow style={{ justifyContent: "space-between", padding: "12px" }}>
        <FlexBox style={{ gap: 8 }}>
          {menu?.map((m, idx) => {
            return (
              <FlexBox key={`${m.menu_key} ${idx}`}>
                <Text style={{ fontSize: 16 }}>{m.menu_label}</Text>
              </FlexBox>
            );
          })}
        </FlexBox>
        <FlexBox>
          <FlexBox>
            <Text>Account</Text>
          </FlexBox>
        </FlexBox>
      </FlexRow>
      <Divider style={{ margin: 0 }} />
    </>
  );
};
