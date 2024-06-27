import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      {/* Upper section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8 space-y-8 lg:space-y-0">
        <div className="flex-1 lg:mr-4">
          <h5 className="text-3xl lg:text-5xl font-bold mb-4">
            SINC Partners is a service incubation company
          </h5>
          <p className="text-lg lg:text-2xl mb-6">
            Connecting experts in product development
            and growth marketing willing to offer their
            services to amazing startups in exchange 
            for minute equity (usually 0.5% to 2%).
          </p>
          <Button className="px-7 py-4 rounded-full">SINC With Us</Button>
        </div>
        <div className="flex-1 max-w-lg lg:max-w-none">
          <Image
            src="/clap.jpg" // Replace with your image path
            alt="Hero Image"
            width={800} // Adjusted width to control size
            height={400} // Adjusted height to control size
            className="object-fill rounded-lg shadow-sm"
          />
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="bg-white max-w-3xl mx-auto p-8 rounded-lg shadow-lg text-center">
        <div className="max-w-3xl">
          <p className="text-lg mb-6">
            At SINC Partners, we strive to empower startups by connecting them
            with top-notch experts in product development and growth marketing.
            Our mission is to foster innovation and help startups succeed by
            providing them with the resources and expertise they need to thrive.
          </p>
          <p className="text-sm mb-2">
            Daniel Izeghs Oratokhai
          </p>
          <p className="text-sm">
            Managing Partner at SINC Partners Ltd
          </p>
        </div>
      </div>
    </div>
  );
}

