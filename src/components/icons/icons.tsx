"use client";

import { ComponentProps } from "react";
import { Icon } from "@trussworks/react-uswds";

type DibbsIconProp = ComponentProps<"svg"> & { size: number };


export const InfoOutlineIcon: React.FC<DibbsIconProp> = (props) => (
  <Icon.InfoOutline {...props} role="" />
);

export const LaunchIcon: React.FC<DibbsIconProp> = (props) => (
  <Icon.Launch {...props} role="" />
);

export const GithubIcon: React.FC<DibbsIconProp> = (props) => (
  <Icon.Github {...props} role="" />
);
