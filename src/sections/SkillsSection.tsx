const skills = [
  'C', 'JavaScript', 'TypeScript', 'Python', 'Node.js', 'Express.js', 'NestJS', 'RabbitMQ',
  'GraphQL', 'REST API', 'React', 'React Native', 'HTML', 'CSS', 'PostgreSQL', 'MongoDB',
  'Prisma', 'Mongoose', 'Docker', 'Git', 'GitHub Actions', 'NGINX', 'Swagger',
  'Vercel', 'Render', 'Cloudinary', 'API Design', 'Clean Architecture'
];

export default function SkillsSection() {
  return (
    <section id="skills">
      <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
