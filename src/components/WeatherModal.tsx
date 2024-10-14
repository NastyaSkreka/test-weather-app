import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { ICurrentWeather } from "@/types/weather.types";
import Button from "./ui/Button";
import { weatherIconMap } from "@/utils/weather-icons";

interface WeatherModalProps {
  open: boolean;
  onClose: () => void;
  weather: ICurrentWeather;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const WeatherModal: React.FC<WeatherModalProps> = ({
  open,
  onClose,
  weather,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Current Weather
        </Typography>
        {weather && (
          <Box
            mt={2}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px"
            }}
          >
            <Box sx={{ fontSize: "48px" }}>
              {weatherIconMap[weather.weathercode] || weatherIconMap[2]}
            </Box>

            <Typography variant="body1">
              Temperature: {weather.temperature} °C
            </Typography>
          </Box>
        )}
        <Button onClick={onClose} label="Close" type="close" />
      </Box>
    </Modal>
  );
};

export default WeatherModal;
