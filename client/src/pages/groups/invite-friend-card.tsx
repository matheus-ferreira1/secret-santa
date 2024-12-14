import { useState } from "react";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InviteFriendCard = () => {
  const [inviteEmail, setInviteEmail] = useState("");

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Invitation sent to:", inviteEmail);
    setInviteEmail("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite Friends</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleInvite} className="flex space-x-2">
          <div className="flex-1">
            <Label htmlFor="invite-email" className="sr-only">
              Email
            </Label>
            <Input
              id="invite-email"
              placeholder="friend@example.com"
              type="email"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit">
            <Mail className="mr-2 h-4 w-4" />
            Invite
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InviteFriendCard;
