export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "3d-printing",
    title: "3D PRINTING",
    subtitle: "DISCOVER THE POSSIBILITIES OF 3D PRINTING TECHNOLOGIES",
    description:
      "From concept to physical object. We work with a range of 3D printing technologies including FDM, SLA, and SLS to produce prototypes, lighting, furniture components, and custom objects at any scale.",
    image: "/images/services/241005_YET_0232_ik copy.jpg",
  },
  {
    id: "bespoke-fabrication",
    title: "BESPOKE FABRICATION",
    subtitle:
      "DISCOVER THE OPPORTUNITY TO DIGITALLY AND PHYSICALLY DEVELOP YOUR IDEA",
    description:
      "We specialize in turning ideas into fabricated reality — from jewelry to facades. Our team guides you through design development, digital modelling, prototyping, and final production.",
    image: "/images/services/3 - YET (0-18-12-35) copy.jpg",
  },
  {
    id: "consultation",
    title: "EXPERT CONSULTATION",
    subtitle: "DISCOVER THE EXPERTISE OF OUR TEAM BY BOOKING A MEETING",
    description:
      "Work directly with the YET:FAB team. We offer design consultations, material research, and technical support for individuals, studios, and businesses at any stage of development.",
    image: "/images/services/850_9093AAA copy.jpg",
  },
];
