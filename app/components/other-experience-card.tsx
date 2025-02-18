import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface OtherExperienceCardProps {
  organization: string
  role: string
  period?: string
  logoUrl?: string
  description: string[]
}

export default function OtherExperienceCard({
  organization,
  role,
  period,
  logoUrl,
  description,
}: OtherExperienceCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {logoUrl && (
            <div className="relative h-12 w-12 flex-shrink-0">
              <Image
                src={logoUrl || "/placeholder.svg"}
                alt={`${organization} logo`}
                fill
                className="rounded-md object-contain"
              />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{organization}</h3>
            <p className="text-muted-foreground">{role}</p>
            {period && <p className="text-sm text-muted-foreground">{period}</p>}
            <ul className="mt-4 list-disc pl-4 space-y-2">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

