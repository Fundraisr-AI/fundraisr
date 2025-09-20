import { useState } from "react";
import {
  ChevronDownIcon,
  SearchIcon,
  SettingsIcon,
  TicketIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";

export const SupportSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    issueTitle: "",
    category: "General",
    priority: "Medium",
    description: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const categories = ["General", "Technical", "Billing", "Account"];
  const priorities = ["Low", "Medium", "High", "Critical"];

  const faqData = [
    {
      question: "How Do I Create A New Capital Campaign?",
      answer:
        "To create a new capital campaign, navigate to the Capital Campaigns page and click the 'Create Campaign' button. Fill in the required information including campaign name, client ID, and status.",
    },
    {
      question: "How Can I Track Campaign Performance?",
      answer:
        "You can track campaign performance through the analytics dashboard which provides real-time metrics and reporting.",
    },
    {
      question: "How Do I Schedule Meetings With Prospects?",
      answer:
        "Navigate to the prospects section and use the calendar integration to schedule meetings directly from the platform.",
    },
    {
      question: "Can I Customize Notification Settings?",
      answer:
        "Yes, you can customize notification settings in your account preferences to control what alerts you receive.",
    },
    {
      question: "How Do I Export Campaign Data?",
      answer:
        "Use the export feature in the campaign dashboard to download your data in various formats including CSV and PDF.",
    },
    {
      question: "What Integrations Are Available?",
      answer:
        "We offer integrations with popular CRM systems, email platforms, and calendar applications to streamline your workflow.",
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Support ticket submitted:", formData);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const filteredFaqs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="w-full h-full content-section flex flex-col overflow-hidden">
      <header className="flex mx-6 h-[60px] relative mt-6 items-center justify-between">
        <div className="flex flex-col items-start gap-1 relative">
          <h1 className="font-bold text-foreground text-2xl leading-tight tracking-tight">
            Support Center
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Get Help And Support For Your Account
          </p>
        </div>
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <Button className="btn-primary gap-2 px-4 py-2">
            <SettingsIcon className="w-4 h-4" />
            Settings
          </Button>
        </div>
      </header>

      {/* Support Form and FAQ Section */}
      <section className="flex mx-[19px] mt-[17px] gap-5 flex-1 overflow-hidden">
        {/* Contact Support Card */}
        <Card className="flex-1 card-elevated">
          <CardContent className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-foreground text-lg">
                Contact Support
              </h2>
              <p className="text-muted-foreground text-xs">
                Submit A Support Ticket And We'll Get Back To You
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-foreground text-sm">
                  Issue Title
                </label>
                <Input
                  value={formData.issueTitle}
                  onChange={(e) => handleInputChange("issueTitle", e.target.value)}
                  placeholder="Brief description of your issue"
                  className="input-enhanced"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="font-medium text-foreground text-sm">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange("category", e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-background rounded-lg border border-input font-normal text-foreground text-base appearance-none cursor-pointer"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <label className="font-medium text-foreground text-sm">
                    Priority
                  </label>
                  <div className="relative">
                    <select
                      value={formData.priority}
                      onChange={(e) => handleInputChange("priority", e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-background rounded-lg border border-input font-normal text-foreground text-base appearance-none cursor-pointer"
                    >
                      {priorities.map((priority) => (
                        <option key={priority} value={priority}>
                          {priority}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium text-foreground text-sm">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Enter Description"
                  rows={6}
                  className="w-full px-3.5 py-2.5 bg-background rounded-lg border border-input font-normal text-foreground text-base resize-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <Button type="submit" className="btn-primary self-start">
                Submit Ticket
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* FAQ Card */}
        <Card className="flex-1 card-elevated">
          <CardContent className="flex flex-col gap-5 p-5">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-foreground text-lg">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground text-xs">
                  Find Answers To Common Questions
                </p>
              </div>

              <div className="relative flex items-center gap-3 px-4 py-2.5 bg-background rounded-lg border border-input input-enhanced w-[229px]">
                <SearchIcon className="w-4 h-4 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search FAQs"
                  className="border-0 bg-transparent p-0 placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 overflow-y-auto">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-2 p-4 rounded-lg border border-border cursor-pointer transition-all ${
                    expandedFaq === index ? "bg-muted/50" : "hover:bg-muted/30"
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-foreground text-sm flex-1 pr-2">
                      {faq.question}
                    </h3>
                    <ChevronDownIcon
                      className={`w-4 h-4 text-muted-foreground transition-transform ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {expandedFaq === index && (
                    <div className="pt-2 border-t border-border">
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Support Tickets Section */}
      <section className="flex mx-[19px] mt-5 mb-6">
        <Card className="w-full card-elevated">
          <CardContent className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-foreground text-lg">
                My Support Tickets
              </h2>
              <p className="text-muted-foreground text-xs">
                Track The Status Of Your Support Requests
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 py-12 bg-muted/30 rounded-lg border border-border">
              <div className="w-8 h-8 text-muted-foreground">
                <TicketIcon className="w-full h-full" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-semibold text-foreground text-base">
                  No support tickets
                </h3>
                <p className="text-muted-foreground text-sm text-center">
                  You Haven't Submitted Any Support Tickets Yet
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};
