import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Tablet, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ViewModeToggleProps {
  viewMode: "desktop" | "tablet" | "mobile";
  onViewModeChange: (mode: "desktop" | "tablet" | "mobile") => void;
}

export const ViewModeToggle = ({ viewMode, onViewModeChange }: ViewModeToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getIcon = () => {
    switch (viewMode) {
      case "mobile":
        return <Smartphone className="h-4 w-4" />;
      case "tablet":
        return <Tablet className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  const getLabel = () => {
    switch (viewMode) {
      case "mobile":
        return "Móvil";
      case "tablet":
        return "Tablet";
      default:
        return "PC";
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="bg-card border-border shadow-lg gap-2"
          >
            {getIcon()}
            <span className="text-xs">{getLabel()}</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-popover">
          <DropdownMenuItem
            onClick={() => {
              onViewModeChange("desktop");
              setIsOpen(false);
            }}
            className="gap-2 cursor-pointer"
          >
            <Monitor className="h-4 w-4" />
            <span>Vista PC</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              onViewModeChange("tablet");
              setIsOpen(false);
            }}
            className="gap-2 cursor-pointer"
          >
            <Tablet className="h-4 w-4" />
            <span>Vista Tablet</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              onViewModeChange("mobile");
              setIsOpen(false);
            }}
            className="gap-2 cursor-pointer"
          >
            <Smartphone className="h-4 w-4" />
            <span>Vista Móvil</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
