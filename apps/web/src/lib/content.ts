import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export function getContentData(filename: string) {
  const fullPath = path.join(contentDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
  };
}

export function parseTeamContent(content: string) {
  const result: { coreTeam: any[]; advisors: any[] } = { coreTeam: [], advisors: [] };

  // Split by ## to get sections
  const sections = content.split(/^## /m).filter(Boolean);

  sections.forEach((section) => {
    const lines = section.trim().split("\n");
    const sectionTitle = lines[0].trim();

    if (sectionTitle === "Core Team" || sectionTitle === "Advisors") {
      // Split by ### to get individual members
      const memberBlocks = section.split(/^### /m).filter(Boolean).slice(1);

      memberBlocks.forEach((memberBlock) => {
        const memberLines = memberBlock
          .trim()
          .split("\n")
          .filter((line) => line.trim());
        const name = memberLines[0].trim();

        let role = "";
        let linkedinUrl = "";
        let imageUrl = "";
        let order = 0;
        const bioLines: string[] = [];

        for (let i = 1; i < memberLines.length; i++) {
          const line = memberLines[i].trim();

          if (line.startsWith("**Role:**")) {
            role = line.replace("**Role:**", "").trim();
          } else if (line.startsWith("**LinkedIn:**")) {
            linkedinUrl = line.replace("**LinkedIn:**", "").trim();
          } else if (line.startsWith("**Image:**")) {
            imageUrl = line.replace("**Image:**", "").trim();
          } else if (line.startsWith("**Order:**")) {
            order = parseInt(line.replace("**Order:**", "").trim());
          } else if (line && !line.startsWith("**")) {
            bioLines.push(line);
          }
        }

        const memberData = {
          name,
          role,
          bio: bioLines.join(" ").trim(),
          imageUrl,
          linkedinUrl,
          order,
        };

        if (sectionTitle === "Core Team") {
          result.coreTeam.push(memberData);
        } else {
          result.advisors.push(memberData);
        }
      });
    }
  });

  return result;
}

export function parseServicesContent(content: string) {
  const services = content.split(/^## /m).filter(Boolean).slice(1);

  return services.map((service) => {
    const lines = service
      .trim()
      .split("\n")
      .filter((line) => line.trim());
    const name = lines[0].trim();
    const icon = lines[1].trim();
    const description = lines
      .slice(2)
      .filter((line) => !line.startsWith("#"))
      .join(" ")
      .trim();

    return {
      name,
      icon,
      description,
      href: "#outcomes",
    };
  });
}

export function parseMethodContent(content: string) {
  const sprints = content.split(/^## /m).filter(Boolean).slice(1);

  return sprints.map((sprint, index) => {
    const lines = sprint
      .trim()
      .split("\n")
      .filter((line) => line.trim());
    const name = lines[0].trim();
    const durationLine = lines.find((line) => line.startsWith("**Duration:**"));
    const duration = durationLine ? durationLine.replace("**Duration:**", "").trim() : "";
    const description = lines
      .filter((line) => !line.startsWith("**Duration:**") && line !== name)
      .join(" ")
      .trim();

    return {
      name,
      duration,
      description,
      dateTime: `step-${index + 1}`,
    };
  });
}

export function parseOutcomesContent(content: string) {
  const deliverables = content.split(/^## /m).filter(Boolean).slice(1);

  return deliverables.map((deliverable) => {
    const lines = deliverable
      .trim()
      .split("\n")
      .filter((line) => line.trim());
    const name = lines[0].trim();
    const description = lines.slice(1).join(" ").trim();

    return {
      name,
      description,
    };
  });
}
