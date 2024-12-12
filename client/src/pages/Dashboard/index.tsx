import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import GroupCard from "./_components/group-card";

interface Group {
  id: string;
  name: string;
  memberCount: number;
  drawDate: string;
}

const DashboardPage = () => {
  const groups: Group[] = [
    {
      id: "1",
      name: "Family Christmas",
      memberCount: 6,
      drawDate: "2023-12-01",
    },
    { id: "2", name: "Office Party", memberCount: 12, drawDate: "2023-12-15" },
    {
      id: "3",
      name: "Friends Gift Exchange",
      memberCount: 8,
      drawDate: "2023-12-20",
    },
  ];

  return (
    <div className="py-8 w-full px-4 lg:px-6">
      <div className="space-y-8 container">
        <h2 className="text-3xl font-bold tracking-tight">
          Your Secret Santa Groups
        </h2>
        {groups.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center h-40">
              <p className="text-muted-foreground mb-4">
                You're not part of any Secret Santa groups yet.
              </p>
              <Link to="/groups/create">
                <Button>Create Your First Group</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
