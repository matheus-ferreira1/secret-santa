import { FC, useState } from "react";
import { Gift } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

interface MakeDrawCardProps {
  isDrawComplete: boolean;
  groupId: string;
}

const MakeDrawCard: FC<MakeDrawCardProps> = ({ isDrawComplete, groupId }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDraw = () => {
    console.log("Performing draw for group:", groupId);
    setIsDialogOpen(false);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Make the draw!</CardTitle>
        <CardDescription>
          Is it time to have fun with your friends and share?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button disabled={isDrawComplete}>
              <Gift className="mr-2 h-4 w-4" />
              {isDrawComplete ? "Draw Complete" : "Perform Draw"}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Draw</DialogTitle>
              <DialogDescription>
                Are you sure you want to perform the draw? This action cannot be
                undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleDraw}>Confirm Draw</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default MakeDrawCard;
