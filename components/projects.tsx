import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/data';

const Projects = () => {
  return (
    <div className="mt-6 space-y-6">
      {projects.map(project => (
        <Card key={project.title} className="border-border/60 bg-card/60 shadow-sm">
          <CardContent className="px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg sm:text-xl tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground sm:text-base">{project.description}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <Badge key={tech} variant="secondary" className="rounded-md text-xs font-medium">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Button size="sm" asChild>
                <Link href={project.demo ?? '/'}>Preview</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={project.github ?? '/'}>GitHub</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
