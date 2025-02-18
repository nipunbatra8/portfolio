import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  company: string
  role: string
  period: string
  logoUrl: string
  description: string[]
  tags: string[]
}

export default function ExperienceCard({ company, role, period, logoUrl, description, tags }: ExperienceCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image
              src={logoUrl || "/placeholder.svg"}
              alt={`${company} logo`}
              fill
              className="rounded-md object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{company}</h3>
            <p className="text-muted-foreground">{role}</p>
            <p className="text-sm text-muted-foreground">{period}</p>
            <ul className="mt-4 list-disc pl-4 space-y-2">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

