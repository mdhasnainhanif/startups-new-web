import { TOP_BANNER } from "../constants";
import Container from "./Container";
import Button from "./Button";
import TopHeaderBehavior from "./TopHeaderBehavior";

export default function TopHeader() {
  if (!TOP_BANNER.show) return null;

  return (
    <>
      {/* Behavior only (small client) */}
      <TopHeaderBehavior />

      <div
        id="topHeader"
        className="topHeader relative md:absolute md:top-0 left-0 right-0 z-50 flex items-center 
        justify-center w-full pt-2 bg-transparent transition-transform duration-300 ease-in-out"
        style={{ willChange: "transform" }}
      >
        <Container maxWidth="2xl" className="px-0">
          <div className="flex items-center justify-between w-full rounded-full lg:px-4 pb-0">
            <div className="flex items-center md:gap-3 gap-1 flex-1 md:justify-center justify-between">
              <p className="topPara">
                <span className="text-xl">{TOP_BANNER.emoji}</span>&nbsp;
                <span className="hidden md:inline">Big News: </span>
                We Launched Key Growth Manager Services
              </p>

              <Button
                href={TOP_BANNER.buttonLink}
                variant="green"
                size="sm"
                iconPosition="right"
                className="mt-2"
              >
                {TOP_BANNER.buttonText}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
