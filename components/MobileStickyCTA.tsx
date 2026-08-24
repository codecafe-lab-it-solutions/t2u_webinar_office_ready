import Link from "next/link";
import Button from "./Button";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream p-3 md:hidden">
      <Link href="/#register">
        <Button variant="yellow" size="lg" className="w-full">
          Reserve My Free Seat
        </Button>
      </Link>
    </div>
  );
}
