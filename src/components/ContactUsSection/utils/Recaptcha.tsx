import ErrorBoundary from "@/components/common/ErrorBountry";
import { useState } from "react";
import ReCaptchaV2 from "react-google-recaptcha";

const key = process.env.CLIENT_CAPTCHA_KEY!;
console.log(key);
export default function ReCaptchaComponent() {
  const [captcha, setCaptcha] = useState<null | string>(null);

  return (
    <ErrorBoundary>
      <ReCaptchaV2
        sitekey={key}
        className="mx-auto my-3"
        onChange={setCaptcha}
      />
    </ErrorBoundary>
  );
}
