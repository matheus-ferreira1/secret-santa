import { FC } from "react";
import { Link } from "react-router-dom";
import { Calendar, Gift } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface GroupCardProps {
  group: {
    id: string;
    name: string;
    memberCount: number;
    drawDate: string;
  };
}

const GroupCard: FC<GroupCardProps> = ({ group }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{group.name}</CardTitle>
        <CardDescription>{group.memberCount} members</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Draw: {group.drawDate}
            </span>
          </div>
          <Link to={`/groups/${group.id}`}>
            <Button variant="outline" size="sm">
              <Gift className="mr-2 h-4 w-4" />
              View Group
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupCard;
