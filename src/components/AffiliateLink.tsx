// Wraps product links with Amazon Associates tag
// Usage: <AffiliateLink asin="B000N501BK" name="Lodge Dutch Oven" />
// Or with custom URL: <AffiliateLink href="https://..." name="Product" />

const AMAZON_TAG = "cookfromwhat2-20";

interface AffiliateLinkProps {
  asin?: string;
  href?: string;
  name: string;
  children?: React.ReactNode;
  className?: string;
}

export default function AffiliateLink({
  asin,
  href,
  name,
  children,
  className = "",
}: AffiliateLinkProps) {
  const url = asin
    ? `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`
    : href || "#";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`text-amber-600 hover:text-amber-700 underline ${className}`}
      title={name}
    >
      {children || name}
    </a>
  );
}
