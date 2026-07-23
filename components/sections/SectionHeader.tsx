type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto max-w-3xl" : "text-left"}`}>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-foreground/70 mb-6">{subtitle}</p>}
      <div className={`h-1 w-20 bg-gold ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
