import { ReactNode } from "react";

import { PageLayout } from "@/components/layouts/page-layout";

const ContactLayout = ({ children }: { children: ReactNode }) => {
  return <PageLayout>{children}</PageLayout>;
};

export default ContactLayout;
