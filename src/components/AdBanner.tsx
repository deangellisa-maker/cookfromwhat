// Placeholder for Google AdSense ad units
// Replace data-ad-slot values once AdSense is approved

interface AdBannerProps {
  slot?: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  className?: string;
}

export default function AdBanner({
  slot = "XXXXXXXXXX",
  format = "auto",
  className = "",
}: AdBannerProps) {
  // Don't render anything until AdSense is approved
  // Uncomment the ad unit below once you have your publisher ID and slot IDs
  return (
    <div
      className={`w-full flex items-center justify-center bg-gray-50 border border-dashed border-gray-200 rounded-lg py-4 text-xs text-gray-400 ${className}`}
    >
      {/* Ad space */}
    </div>
  );

  // UNCOMMENT WHEN ADSENSE IS APPROVED:
  // return (
  //   <div className={className}>
  //     <ins
  //       className="adsbygoogle"
  //       style={{ display: "block" }}
  //       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
  //       data-ad-slot={slot}
  //       data-ad-format={format}
  //       data-full-width-responsive="true"
  //     />
  //     <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  //   </div>
  // );
}
