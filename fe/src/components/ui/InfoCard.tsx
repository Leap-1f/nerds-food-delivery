import { Box, colors } from "@mui/material";

export const InfoCard = () => {
  const card = [
    {
      name: "Хүргэлтийн төлөв хянах",
      text: "Захиалга бэлтгэлийн явцыг хянах",
      img: "./next.svg",
    },
    {
      name: "Шуурхай хүргэлт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
      img: "./green.svg",
    },
    {
      name: "Эрүүл, баталгаат орц",
      text: "Захиалга бэлтгэлийн явцыг хянах",
      img: "./delivery.svg",
    },
    {
      name: "Хоолны өргөн сонголт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
      img: "./next.svg",
    },
  ];
  return (
    <Box
      sx={{
        margin: "0px auto",
        width: "100%",
        bgcolor: "white",
        maxWidth: "1250px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {card.map((Element) => (
          <Box
            sx={{
              width: "20%",
              height: "100%",
              border: "1px solid #D6D8DB ",
              borderRadius: "16px",
              gap: "15px",
              padding: "16px",
              bgcolor: "#FFFFFF",
              objectFit: "cover",
              boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                padding: "15px",
                gap: "10px",
              }}
            >
              <img
                src={Element.img}
                style={{
                  width: "10%",
                  height: "10%",
                  lineHeight: "25px",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                gap: "4px",
                lineHeight: "27px",
                color: "#272727",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                {Element.name}
              </p>
              <p
                style={{
                  opacity: "75%",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#272727",
                }}
              >
                {Element.text}
              </p>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
