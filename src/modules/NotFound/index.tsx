import { Typography } from "@mui/material";
import React from "react";
import { i18n } from "../../translations/i18n";

const NotFound: React.FunctionComponent = () => (
  <Typography>{i18n.t("errors.notFound404")}</Typography>
);

export default NotFound;
