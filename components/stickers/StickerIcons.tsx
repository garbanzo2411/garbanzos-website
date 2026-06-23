function EmojiBacking({ emoji }: { emoji: string }) {
  return (
    <div
      className="w-full h-full rounded-full bg-[#F9F5EE] border border-ink/10
                 flex items-center justify-center
                 text-[clamp(26px,5.2vw,48px)] leading-none select-none"
    >
      {emoji}
    </div>
  );
}

export function FootballSticker() {
  return <EmojiBacking emoji="🏈" />;
}

export function SoccerBallSticker() {
  return <EmojiBacking emoji="⚽" />;
}

export function LaptopSticker() {
  return <EmojiBacking emoji="💻" />;
}

export function TradingCardSticker() {
  return <EmojiBacking emoji="🎴" />;
}

export function AirplaneSticker() {
  return <EmojiBacking emoji="✈️" />;
}

export function ControllerSticker() {
  return <EmojiBacking emoji="🎮" />;
}
