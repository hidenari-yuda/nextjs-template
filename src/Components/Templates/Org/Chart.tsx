import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";

interface OrgChartProps {
  orgId: string;
}

const OrgChart = ({ orgId }: OrgChartProps) => {
  return (
    <>
      <div>組織図</div>
      <AvatarGroup total={24}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
    </>
  )
}

export default OrgChart