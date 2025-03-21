import Image from "next/image";
import { CardSpotlight } from "../ui/card-spotlight";

export default function ServiceCard({
  service,
}: {
  service: { title: string; description: string; icon: string; hex: string };
}) {
  return (
    <CardSpotlight radius={300}>
      <div className="p-2 flex flex-col items-center gap-4">
        <div className="mb-4">
          <Image
            src={service.icon}
            alt={service.title}
            width={60}
            height={60}
            className="dark:invert"
          />
        </div>
        <h3 className="con-text-xl font-semibold text-white mb-2 text-center">
          {service.title}
        </h3>
        <p className="con-text-lg text-gray-600 dark:text-gray-400 text-center">
          {service.description}
        </p>
      </div>
    </CardSpotlight>
  );
}
