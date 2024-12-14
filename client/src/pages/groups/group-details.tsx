import { FC, useState } from "react";
import { ChevronDown, Crown, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import MakeDrawCard from "./make-draw-card";
import InviteFriendCard from "./invite-friend-card";

interface Participant {
  id: string;
  name: string;
  email: string;
  isModerator: boolean;
}

interface GroupDetailsProps {
  group: {
    id: string;
    name: string;
    description: string;
    drawDate: string;
    participants: Participant[];
    currentUserId: string;
    isDrawComplete: boolean;
  };
}

const GroupDetails: FC<GroupDetailsProps> = ({ group }) => {
  const [participants, setParticipants] = useState(group.participants);

  const currentUser = participants.find((p) => p.id === group.currentUserId);
  const isModerator = currentUser?.isModerator;

  const handleTransferModerator = (newModeratorId: string) => {
    setParticipants(
      participants.map((p) => ({
        ...p,
        isModerator: p.id === newModeratorId,
      }))
    );
  };

  const handleExcludeParticipant = (participantId: string) => {
    setParticipants(participants.filter((p) => p.id !== participantId));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{group.name}</CardTitle>
            <CardDescription>{group.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Draw Date: {group.drawDate}
            </p>
          </CardContent>
        </Card>
        {isModerator && (
          <MakeDrawCard
            groupId={group.id}
            isDrawComplete={group.isDrawComplete}
          />
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Participants</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {participants.map((participant) => (
              <li
                key={participant.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{participant.name}</span>
                  {participant.isModerator && (
                    <Crown className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
                {isModerator && participant.id !== group.currentUserId && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        Actions
                        <ChevronDown />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() => handleTransferModerator(participant.id)}
                      >
                        Make Moderator
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleExcludeParticipant(participant.id)}
                      >
                        Remove from Group
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <InviteFriendCard />
    </div>
  );
};

export default GroupDetails;
