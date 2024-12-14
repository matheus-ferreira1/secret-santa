import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  groupName: string;
  description: string;
  drawDate: string;
}

const CreateGroupForm = () => {
  const [formData, setFormData] = useState<FormData>({
    groupName: "",
    description: "",
    drawDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "Form submitted:",
      formData.groupName,
      formData.description,
      formData.drawDate
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="group-name">Group Name</Label>
        <Input
          id="groupName"
          name="groupName"
          value={formData.groupName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
          name="description"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="draw-date">Draw Date</Label>
        <Input
          id="draw-date"
          type="date"
          name="drawDate"
          value={formData.drawDate}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">Create Group</Button>
    </form>
  );
};

export default CreateGroupForm;
