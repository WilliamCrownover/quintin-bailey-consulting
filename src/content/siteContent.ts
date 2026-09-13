import heroBackground from '../../data/images/Background (Stinson Beach) - Landing Page.jpg'
import quintinHeadshot from '../../data/images/Headshot - About Quintin Bailey, PsyD, ABPP.jpg'
import image0658 from '../../data/images/IMG_0658.jpeg'
import image2106 from '../../data/images/IMG_2106.jpeg'
import image2277 from '../../data/images/IMG_2277.jpeg'

const image0080 = new URL('../../data/images/IMG_0080.JPG', import.meta.url).href

export const siteMeta = {
  title: 'Quintin Bailey, PsyD, ABPP',
  tagline: 'Trans the Cis-tem of Psychology',
  subtitle: 'Board Certified in Psychoanalytic and Psychodynamic Psychology',
  certificationNote:
    'Board certified by the American Board of Professional Psychology (ABPP),  a distinction held by fewer than 1% of psychologists nationally',
  licenses: 'CA License #34961 – MI License #6301019627 – TX License #39158',
  psychologyTodayUrl: 'https://www.psychologytoday.com/profile/906011',
  contactEmail: 'qbaileypsyd@gmail.com',
}

export const media = {
  heroBackground,
  quintinHeadshot,
  previews: {
    about: image0658,
    clinical: image2106,
    consultation: image2277,
    publications: image0080,
  },
}

export const homePreviews = [
  {
    title: 'About Quintin',
    cta: 'Explore About',
    href: '/about',
    image: media.quintinHeadshot,
    imagePosition: '50% 22%',
  },
  {
    title: 'Publications & Media',
    cta: 'Explore Publications',
    href: '/publications',
    image: media.previews.about,
    imagePosition: '50% 55%',
  },
  {
    title: 'Consultation Services',
    cta: 'View Consultation Services',
    href: '/consultation',
    image: media.previews.consultation,
  },
  {
    title: 'Clinical Services',
    cta: 'View Clinical Services',
    href: '/clinical',
    image: media.previews.clinical,
    imagePosition: '50% 0%',
  },
  {
    title: 'Contact Quintin',
    cta: 'Contact Quintin',
    href: '/contact',
    image: media.previews.publications,
    imagePosition: '50% 0%',
  },
]

export const aboutSections = {
  heading: 'Professional Background and Clinical Expertise',
  background:
    'Warm, collaborative, and grounded care begins with the belief that authentic connection is the foundation of healing. Grounded in object relations theory and contemporary psychoanalytic frameworks, Quintin’s clinical and professional practice focuses on creating a secure, attuned space to explore internal dynamics and relational patterns.',
  expertise:
    'Licensed as a psychologist in California, Michigan, and Texas, Quintin is board certified in Psychoanalytic and Psychodynamic Psychology by the American Board of Professional Psychology (ABPP) and The American Board and Academy of Psychoanalytic and Psychodynamic Psychology (ABAPPP). Quintin’s clinical psychotherapy, consultation, and supervisory practices center on work with adults navigating complex personality structures, severe dissociative conditions, and the lingering impacts of developmental and complex trauma. Advanced post-graduate study includes a certificate in Complex Trauma and Dissociation from the International Society for the Study of Trauma and Dissociation (ISSTD), alongside specialized training programs in Jungian psychotherapy and trauma-informed attachment.',
  researchHeading: 'Research, Advocacy, and Scholarly Contributions',
  research:
    'Quintin’s scholarship and advocacy focus on psychoanalytic theory, trans identity development, and the intentional integration of diversity, equity, inclusion, and belonging (DEIB) within psychological systems and institutional structures. Contributions to the field include peer-reviewed publications in journals such as Studies in Gender and Sexuality and Psychoanalytic Psychology, as well as presentations at national convenings including the Society for Personality and Social Psychology (SPSP) and Division 39 of the American Psychological Association.',
  creativeHeading: 'Creative Pursuits and Personal Life',
  creative:
    'Outside of clinical work and research, Quintin is an active poet and photographer. Writing poetry and capturing imagery serve as natural extensions of a lifelong curiosity about inner worlds, narrative, and the subtle textures of human experience. This creative outlet offers a contemplative space for observing the nuances of light, shadow, and emotion in everyday life, deeply informing a holistic and deeply human perspective both in and out of the consulting room.',
}

export const publications = {
  heading: 'Publications, Media, & Creative Offerings',
  papers: [
    {
      title: 'Un(be)coming (2025)',
      link: 'https://www.tandfonline.com/doi/full/10.1080/15240657.2025.2503590',
      source: 'Studies in Gender and Sexuality',
      description:
        'This article explores various ways that dominant discourse around identity disclosure and use of self are enacted in the supervision of graduate students. More explicitly, the author explores their own process of clinical disciplining over the course of graduate school through a tapestry of transpoetics and object relations theory. This exploration is presented through extended metaphor to underscore the ways Westernized, white, heterosexual, cisgender, able-bodied identities continue to be unconsciously used as the baseline by which clinicians with different identities are measured and interpreted by those with evaluative power. For many trans clinicians in particular, the ability to pass graduate school hinges on our ability to pass as non-trans. Through the policing of trans existence in psychoanalysis, trans clinicians experience violence and colonization with regards to their mind and bodies, and by extension the minds and bodies of their patients. This is a call from within the institution to trans the cis-tem of psychoanalysis through a radical transformation of the supervision space.',
    },
    {
      title: 'Trans Identity Development and Integration (2024)',
      link: 'https://psycnet.apa.org/fulltext/2024-13773-001.html',
      source: 'Psychoanalytic Psychology',
      description:
        'This article explores popular modern theories of trans identity development and proposes a new conceptualization grounded in psychoanalytic and transgender theory. Building on Winnicott’s (1960) theories of the true and false self to understand trans identity development, this author proposes the concept of trans existential dread to understand the tension between the true and false self for trans folks. These concepts are presented alongside clinical recommendations for exploring gender with all patients.',
    },
  ],
  media: [
    {
      title: 'Do I Have Avoidant Personality Disorder or Am I Just Shy?',
      link: 'https://www.wondermind.com/article/avoidant-personality-disorder/',
      source: 'Article by Sam Brodsky for Wondermind.com',
    },
  ],
  creative: [
    {
      title: 'Dissociation',
      link: 'https://critica.press/2026/06/25/dissociation-2/',
      source: 'Photograph, Critica',
    },
    {
      title: 'Surviving Social Death',
      link: 'https://critica.press/2026/02/05/surviving-social-death/',
      source: 'Poem, Critica',
    },
  ],
}

export const clinicalContent = {
  heading: 'Clinical Services',
  intro:
    'Quintin offers telehealth psychotherapy services for adults throughout California, Michigan, and Texas. Learn more or inquire about services via Psychology Today!',
  approach:
    'Quintin’s primary theoretical orientation is psychodynamic, which means they believe in the unconscious and in the importance of being curious about the unique universe of every patient. Having worked primarily with folks with personality and dissociative disorders, Quintin holds great empathy for the suffering from which these styles of relating to the world developed to survive and the unfortunate cultural and clinical stigma often associated with these patterns of relating. Every treatment serves as a reminder that it is a privilege to be with another and to hold space for their process of transformation. By connecting with their values and becoming grounded in the present, Quintin has supported those from a variety of diverse backgrounds and identity intersections to increase their capacity to feel, understand, and integrate a range of emotional experiences to become curious about themselves and others.',
  relationship:
    'This includes being curious about the therapeutic relationship in the here and now. Feeling you can bring your full self into the therapy room is of utmost importance. This means feeling seen and understood in the often uncomfortable or challenging process of change. For this reason, Quintin offers a free 30-minute consultation to all new patients prior to starting treatment.',
  specializations: [
    'Personality Disorders & Borderline Personality Disorder',
    'Dissociative Disorders',
    'Relationship Issues',
    'Life Transitions',
    'Trauma',
    'Identity Development & Integration',
    'Grief & Loss',
    'Differential Diagnosis Assessments',
  ],
}

export const consultationContent = {
  heading: 'Consultation Services',
  complexHeading: 'Clinical Consultation for Complex Cases',
  complexCases:
    'Quintin offers specialized individual consultation to mental health professionals treating high-acuity and complex presentations such as  complex personality structures or severe dissociative disorders. Drawing on a psychodynamic foundation, this service provides a secure, reflective container to:',
  complexCaseBullets: [
    'Explore transference/countertransference and relational dynamics',
    'Navigate impact and manage professional fatigue of long-term work with severe trauma',
    'Refine differential diagnosis and case conceptualization',
  ],
  transInclusiveHeading: 'Trans-Inclusive Clinic Consultation',
  transInclusive:
    'Providing ethical clinical care means providing explicitly trans-inclusive services. From the moment of first contact with a clinic or provider to eventual treatment termination, every patient deserves to be seen and understood for their true self. Drawing on background at the Pacific Center for Human Growth - the oldest LGBTQIA+ center in the Bay Area - support is offered to help practices build affirming systems, alongside specialized staff training sessions and clinical presentations.',
  trainingsHeading: 'Available Trainings and Lectures (In-person or via Zoom)',
  trainings: [
    'Shapes of Gender: An exploration inviting clinicians to think critically about gender, grounded in trans theory and integrated with narrative therapy techniques.',
    'Trans-Inclusive Clinical Interviewing: An overview of inclusive interviewing and documentation, highlighting systemic healthcare limitations and practical navigation strategies.',
  ],
  additionalHeading: 'Additional Consultation Offerings',
  additional: [
    'Review of Documentation and Clinic Practices: Thorough auditing of intake paperwork, forms, and clinic documentation for trans-inclusive language and affirming operational practices.',
    'Comprehensive Clinic Consultation: A full assessment of current clinic workflows and practices, followed by tailored training packages fully customizable to the needs of the practice.',
  ],
}

export const contactContent = {
  heading: 'Contact Quintin',
  intro:
    'To inquire about consultation services, media requests, or for other questions, please reach out via the contact form below. Quintin typically replies to messages within 24-48 business hours. If you are interested in clinical services, such as individual psychotherapy, please reach out via Psychology Today.',
}
