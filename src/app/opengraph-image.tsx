import { ImageResponse } from "next/og";
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/site";

export const alt = `${SITE_NAME} — cafeteria em Caravelas, Bahia`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fff8eb",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "96px",
              height: "96px",
              borderRadius: "48px",
              backgroundColor: "#163e38",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "34px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#bc7532",
              fontWeight: 700,
            }}
          >
            Cafeteria &amp; Coffee Shop
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "120px",
            lineHeight: 1,
            color: "#163e38",
            fontWeight: 700,
          }}
        >
          {SITE_NAME}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "40px",
            color: "#212121",
          }}
        >
          A cafeteria mais acolhedora de Caravelas
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "30px",
            color: "#666666",
          }}
        >
          {`${BUSINESS.streetAddress} · ${BUSINESS.addressLocality} - ${BUSINESS.addressRegion}`}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            color: "#bc7532",
            fontWeight: 600,
          }}
        >
          {SITE_URL.replace(/^https?:\/\//, "")}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
