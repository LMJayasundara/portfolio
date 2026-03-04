import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { experiences } from '@/data';

export default function Career() {
  return (
    <div className="relative mt-6 ml-3">
      {/* Timeline line */}
      <div className="absolute top-4 bottom-0 left-0 border-l-2" />

      {experiences.map(({ company, image, roles, technologies, workMode }, index) => (
        <div className="relative pb-12 pl-8 last:pb-0" key={index}>
          {/* Timeline dot */}
          <div className="absolute top-3 left-px h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />

          {/* Content */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2.5">
                <span className="font-semibold text-lg">{company}</span>
              </div>
              {workMode && (
                <Badge className="rounded-md px-3 py-1 text-xs" variant="secondary">
                  {workMode}
                </Badge>
              )}
            </div>

            <div className="space-y-6">
              {roles.map(role => (
                <div key={role.title}>
                  <div>
                    <h3 className="font-semibold text-xl tracking-[-0.01em]">{role.title}</h3>
                    <div className="mt-1 flex items-center gap-2 text-sm">
                      <span>{role.period}</span>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground sm:text-base">
                    {role.highlights.map(item => (
                      <li className="flex gap-2" key={item}>
                        <span className="-ml-1">-</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {technologies.map(tech => (
                  <Badge className="rounded-md" key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button size="sm">View more</Button>
            </div>

            {image && (
              <div className="relative mt-2 h-40 w-full overflow-hidden rounded-md border border-border bg-card md:mt-0">
                <Image
                  src={image}
                  alt={roles[0]?.title ?? company}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 320px, 100vw"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
