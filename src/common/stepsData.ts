import { Step } from "../store/StepStore.d";

export const steps: Step[] = [
  {
    id: 1,
    title: "Personal Information",
    errorMessage: "Please enter a valid name.",
    icon: "user",
  },
  {
    id: 2,
    title: "Contact Details",
    icon: "envelope",
  },
  {
    id: 3,
    title: "Address",
    icon: "home",
    quantity: 100,
  },
  {
    id: 4,
    title: "Account Setup",
    icon: "user-plus",
  },
  {
    id: 5,
    title: "Security Questions",
    icon: "question-circle",
    quantity: 30,
  },
  {
    id: 6,
    title: "Preferences",
    icon: "sliders-h",
  },
  {
    id: 7,
    title: "Payment Information",
    icon: "credit-card",
  },
  {
    id: 8,
    title: "Shipping Details",
    icon: "truck",
  },
  {
    id: 9,
    title: "Review Order",
    icon: "search",
    quantity: 10,
  },
  {
    id: 10,
    title: "Confirm Order",
    errorMessage: "There was an issue confirming your order.",
    icon: "check-circle",
    quantity: 12,
  },
  {
    id: 11,
    title: "Feedback",
    icon: "comments",
  },
  {
    id: 12,
    title: "Completion",
    icon: "flag-checkered",
  },
  {
    id: 13,
    title: "Account Verification",
    icon: "shield-alt",
  },
  {
    id: 14,
    title: "Notification Settings",
    icon: "bell",
  },
];
