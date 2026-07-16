import { ImageResponse } from "next/og";

export const alt = "Izzy Lokko | Videaste / Photographe a Paris";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const chipStyle = {
  display: "flex",
  alignItems: "center",
  padding: "16px 22px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.04)",
  color: "#d8d8d8",
  fontSize: 24,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 18% 0%, rgba(195,15,29,0.28), transparent 28%), radial-gradient(circle at 82% 18%, rgba(195,15,29,0.16), transparent 22%), linear-gradient(180deg, #080808 0%, #050505 100%)",
          color: "#f3f3f3",
          fontFamily: '"Iowan Old Style","Palatino Linotype","Book Antiqua","Georgia","Times New Roman",serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(195,15,29,0.08), transparent 34%, transparent 66%, rgba(195,15,29,0.08))",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
            maskImage: "linear-gradient(180deg, black, transparent 92%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 36,
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "56px 64px 50px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#a8a8a8",
            }}
          >
            <div
              style={{
                width: 54,
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.14), rgba(195,15,29,0.95))",
              }}
            />
            Press Kit
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 880,
            }}
          >
            <div
              style={{
                fontSize: 100,
                lineHeight: 0.92,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Izzy Lokko
            </div>

            <div
              style={{
                marginTop: 22,
                display: "flex",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: 28,
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                color: "#d7d7d7",
              }}
            >
              Videaste . Photographe
            </div>

            <div
              style={{
                marginTop: 28,
                display: "flex",
                maxWidth: 760,
                fontSize: 30,
                lineHeight: 1.45,
                color: "#c4c4c4",
              }}
            >
              Evenements premium, private events, nightlife et contenus editoriaux a
              Paris, en France et a l&apos;international.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", gap: 14 }}>
              <div style={chipStyle}>After Movie</div>
              <div style={chipStyle}>Photo / Video</div>
              <div style={chipStyle}>Social Content</div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 10,
                fontFamily: "Arial, Helvetica, sans-serif",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  letterSpacing: "0.26em",
                  color: "#d04c57",
                }}
              >
                Lokko TV
              </div>
              <div
                style={{
                  fontSize: 20,
                  letterSpacing: "0.24em",
                  color: "#d8d8d8",
                }}
              >
                Paris / FR / Intl
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
