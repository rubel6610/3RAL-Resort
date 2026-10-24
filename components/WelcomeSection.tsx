"use client";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="relative w-full bg-white text-[#1c2e24] overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        
        {/* Left Column: Story Copy (50% Width) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-16 sm:py-20 lg:py-24 pl-6 sm:pl-12 lg:pl-14 xl:pl-20 2xl:pl-[200px] pr-6 lg:pr-10 xl:pr-14 z-10">
          <div className="max-w-[580px] space-y-6">
            <h2 className="font-average text-3xl sm:text-4xl lg:text-[46px] leading-[1.2] text-[#11271d] tracking-normal">
              Welcome To Corral Creek Lodge
            </h2>

            <div className="space-y-5 text-[#3a4f43] text-base lg:text-[16.5px] leading-[1.75] font-inter">
              <p>
                <strong className="text-[#0a3a2a] font-semibold">
                  Corral Creek Lodge
                </strong>{" "}
                Is Your Home Away From Home In The Sequoia National Forest. At
                The Intersection Of Comfort And Convenience Lies Corral Creek
                Lodge. Where You Can Take Full Advantage Of Numerous Amenities
                And Services That Are Guaranteed To Make Your Stay With Us A
                Memorable One.
              </p>

              <p>
                We Seek To Provide You With The Attention And Luxury You Deserve,
                Featuring Impeccable Accommodations And An Attentive Staff. We
                Guarantee You&apos;ll Have A Pleasant Experience Here. Explore
                Our Site To See What We Have To Offer, And Don&apos;t Hesitate
                To Reach Out With Questions.
              </p>

              <p>
                You Will Enjoy Our Beautiful Natural Setting Along The Kern River
                While Staying In One Of Our 20 Clean And Inviting Rooms,
                Including Pet-Friendly Rooms.
              </p>

              <p className="font-semibold text-[#0a3a2a] pt-2 text-lg">
                We Look Forward To Welcoming You Here Soon!
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Full-Bleed Lodge Image (50% Width) */}
        <div className="w-full lg:w-1/2 relative min-h-[440px] sm:min-h-[540px] lg:min-h-[640px] flex self-stretch">
          <Image
            src="/images/welcome_lodge2.png"
            alt="Corral Creek Lodge exterior nestled in Sequoia National Forest"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-right"
          />
        </div>

      </div>
    </section>
  );
}
