import { useDispatch, useSelector } from "react-redux";
import { EmailCard } from "../EmailCard/EmailCard";

export const MailContainer = () => {
  const dispatch = useDispatch();
  const { status, mails, error } = useSelector((state) => state.mails);
  return (
    <div className="MailContainer">
      {mails.map((email) => (
        <EmailCard email={email} />
      ))}
    </div>
  );
};
