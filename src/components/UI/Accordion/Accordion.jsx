import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";

export default function Accodion() {
  const { t } = useTranslation();
  const QUESTIONS = [
    {
      id: 1,
      question: t("question.q1"),
      answer: t("question.a1"),
    },
    {
      id: 2,
      question: t("question.q2"),
      answer: t("question.a2"),
    },
    {
      id: 3,
      question: t("question.q3"),
      answer: t("question.a3"),
    },
    {
      id: 4,
      question: t("question.q4"),
      answer: t("question.a4"),
    },
    {
      id: 5,
      question: t("question.q5"),
      answer: t("question.a5"),
    },
   
  ];
  return (
    <MDBAccordion alwaysOpen initialActive={1}>
      {QUESTIONS.map((question) => (
        <MDBAccordionItem
          collapseId={question.id}
          headerTitle={question.question}
          key={question.id}
        >
          <strong>{question.answer}</strong>
        </MDBAccordionItem>
      ))}
    </MDBAccordion>
  );
}
