import { Box, colors } from "@mui/material";

export const InfoCard = () => {
  const card = [
    {
      name: "Хүргэлтийн төлөв хянах",
      text: "Захиалга бэлтгэлийн явцыг хянах",
      img: "./next.svg",
    },
    {
      name: "Хүргэлтийн төлөв хянах",
      text: "Захиалга бэлтгэлийн явцыг хянах",
      img: "./delivery1.png",
    },
    {
      name: "Хүргэлтийн төлөв хянах",
      text: "Захиалга бэлтгэлийн явцыг хянах",
      img: "./tree.png",
    },
    {
      name: "Хүргэлтийн төлөв хянах",
      text: "Захиалга бэлтгэлийн явцыг хянах",
      img: "./next.svg",
    },
  ];
  return (
    <Box
      sx={{
        height: "155px",
        padding: "120px",
        gap: "47px",
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "white",
      }}
    >
      {card.map((Element) => (
        <Box
          sx={{
            width: "265px",
            height: "155px",
            border: "1px solid gray",
            borderRadius: "16px",
            gap: "15px",
            padding: "16px",
            bgcolor: "#FFFFFF",
            boxShadow: "shadow-inner",
          }}
        >
          <Box
            sx={{ width: "60px", height: "60px", padding: "15px", gap: "10px" }}
          >
            <img
              src={Element.img}
              style={{ width: "30px", height: "30px", lineHeight: "25px" }}
            />
          </Box>
          <Box
            sx={{
              width: "232px",
              height: "48px",
              gap: "4px",
              lineHeight: "27px",
              color: "#272727",
            }}
          >
            <p style={{ fontSize: "18px", fontWeight: "700px" }}>
              {Element.name}
            </p>
            <p
              style={{
                opacity: "75%",
                fontSize: "14px",
                fontWeight: "400px",
                color: "#272727",
              }}
            >
              {Element.text}
            </p>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
