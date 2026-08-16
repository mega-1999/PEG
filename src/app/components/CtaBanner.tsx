import React from 'react';
import { Button } from "@/components/ui/button";

interface RegistrationBannerProps {
  txtSrc: string;
  btSrc: string;
}

export const RegistrationBanner = ({ txtSrc, btSrc }: RegistrationBannerProps) => {
  return (
    <section className="w-full bg-[#004aad] py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">

        {/* The Text Content */}
        <h2 className="text-white text-lg md:text-xl font-medium tracking-wide text-center md:text-left">
          {txtSrc}
        </h2>

        {/* The Outlined Button - Mimicking the ARCAT style */}
        {btSrc && (
          <Button
            variant="outline"
            className="rounded-none border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#004aad] font-bold uppercase tracking-[0.15em] transition-all duration-300"
          >
            {btSrc}
          </Button>
        )}

      </div>
    </section>
  );
};