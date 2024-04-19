import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const SkillCard = ({ skill }) => {
  return (
    <Card className="skill-card" elevation={3} sx={{background: '#F7F9FB'}}>
      <CardContent>
        <Typography variant="body1">{skill}</Typography>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
