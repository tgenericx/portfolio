export default function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="space-y-4">
        <div className="border border-border rounded p-4 bg-card text-card-foreground">
          <h3 className="text-lg font-bold">
            <a href="https://github.com/tgenericx/boundless" className="text-primary hover:underline">Boundless – Social Platform API</a>
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            A hybrid social media API built with NestJS, MongoDB, GraphQL, Docker, and more —
            designed to help students stay updated on campus life.
          </p>
          <ul className="text-sm list-disc pl-6 text-muted-foreground">
            <li>Modular, scalable architecture with NestJS and Prisma</li>
            <li>GraphQL and REST endpoints with real-time subscriptions</li>
            <li>Media handling via Cloudinary; CI/CD ready</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
