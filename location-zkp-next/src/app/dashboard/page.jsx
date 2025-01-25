import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { TimelineDemo } from "../components/TimeLine";



const Dashboard = () => {
  return (
    <div className="flex h-screen bg-black w-full justify-center ">
      <main>
        <div>
          {/* Timeline Component */}
          <section className="bg-black shadow-md rounded-lg p-4">
            <TimelineDemo />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
