import { Github, SendIcon } from "lucide-react";

import { VkIcon } from "@shared/icons";

export const socialMediaIconMap: Record<string, React.ReactElement> = {
  tg: <SendIcon size={16} />,
  vk: <VkIcon size={16} />,
  GitHub: <Github size={16} />
};
