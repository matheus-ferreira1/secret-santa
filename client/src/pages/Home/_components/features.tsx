import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gift, Users, Mail, List, Lock, Calendar } from "lucide-react";

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted px-4 lg:px-6">
      <div className="container space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Everything You Need for Secret Santa
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Powerful features to make your gift exchange smooth and enjoyable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Gift className="h-10 w-10 text-red-500" />
              <CardTitle>Smart Matching</CardTitle>
              <CardDescription>
                Automatic and fair gift exchange matching with exclusion rules.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-green-500" />
              <CardTitle>Group Management</CardTitle>
              <CardDescription>
                Create multiple groups and invite friends easily.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Mail className="h-10 w-10 text-blue-500" />
              <CardTitle>Automated Notifications</CardTitle>
              <CardDescription>
                Automatic emails for invites and match announcements.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <List className="h-10 w-10 text-yellow-500" />
              <CardTitle>Wishlists</CardTitle>
              <CardDescription>
                Create and share gift wishlists with your group.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Lock className="h-10 w-10 text-purple-500" />
              <CardTitle>Private & Secure</CardTitle>
              <CardDescription>
                Your gift exchange details are kept private and secure.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Calendar className="h-10 w-10 text-orange-500" />
              <CardTitle>Event Planning</CardTitle>
              <CardDescription>
                Set dates, budgets, and rules for your gift exchange.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
