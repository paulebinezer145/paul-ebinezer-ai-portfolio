import { Reveal, SectionHeading, GlassCard, MagneticButton } from "./ui";
import { Download, FileText, ShieldCheck, Eye } from "lucide-react";
import resumeAsset from "@/assets/paul-resume.docx.asset.json";
import { useMemo } from "react";

export function Resume() {
  const fileUrl = useMemo(() => {
    if (typeof window === "undefined") return resumeAsset.url;
    const origin = window.location.origin;
    return resumeAsset.url.startsWith("http")
      ? resumeAsset.url
      : `${origin}${resumeAsset.url}`;
  }, []);

  const previewUrl = useMemo(
    () => `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(fileUrl)}`,
    [fileUrl]
  );

  const handlePreview = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(previewUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="resume" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Resume"
          title="My Resume"
          subtitle="A concise, ATS-friendly overview of my skills, projects and readiness."
        />
        <Reveal>
          <GlassCard className="glow-border grid items-center gap-8 rounded-3xl p-8 lg:grid-cols-2">
            <div className="grid aspect-[3/4] max-h-96 place-items-center rounded-2xl glass">
              <div className="text-center">
                <FileText className="mx-auto h-14 w-14 text-muted-foreground" />
                <p className="mt-3 text-sm text-muted-foreground">Resume preview</p>
              </div>
            </div>
            <div>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs glow-border">
                <ShieldCheck className="h-4 w-4 text-[color-mix(in_oklab,var(--glow)_85%,white)]" />
                ATS-Friendly Resume
              </span>
              <h3 className="mt-4 text-2xl font-bold">Paul Ebinezer</h3>
              <p className="mt-2 text-muted-foreground">
                Data Scientist & Machine Learning Engineer. Download the full resume or preview it
                in browser.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <MagneticButton
                  href={resumeAsset.url}
                  download={resumeAsset.original_filename}
                  variant="primary"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </MagneticButton>
                <MagneticButton
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handlePreview}
                  variant="outline"
                >
                  <Eye className="h-4 w-4" /> Preview
                </MagneticButton>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
