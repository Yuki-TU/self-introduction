import type { Metadata } from "next";

import { Contact } from "./_components/contact";

export const metadata: Metadata = {
  title: "y's room - CONTACT",
  description: "自己紹介のCONTACTページです。",
};

/**
 * コンタクトページ
 * @returns コンポーネント
 */
const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
