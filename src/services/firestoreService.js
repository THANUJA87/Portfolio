import {
  collection,
  doc,
  getDoc,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../firebase'
import { portfolioData } from '../data/portfolioData'

export async function fetchPortfolioData() {
  if (!isFirebaseConfigured() || !db) {
    return portfolioData
  }

  try {
    const profileSnap = await getDoc(doc(db, 'portfolio', 'profile'))
    const skillsSnap = await getDoc(doc(db, 'portfolio', 'skillCategories'))
    const projectsSnap = await getDoc(doc(db, 'portfolio', 'projects'))
    const experienceSnap = await getDoc(doc(db, 'portfolio', 'experience'))
    const educationSnap = await getDoc(doc(db, 'portfolio', 'education'))
    const certificatesSnap = await getDoc(doc(db, 'portfolio', 'certificates'))

    return {
      profile: profileSnap.exists() ? profileSnap.data() : portfolioData.profile,
      skillCategories: skillsSnap.exists()
        ? skillsSnap.data().items
        : portfolioData.skillCategories,
      projects: projectsSnap.exists() ? projectsSnap.data().items : portfolioData.projects,
      experience: experienceSnap.exists()
        ? experienceSnap.data().items
        : portfolioData.experience,
      education: educationSnap.exists()
        ? educationSnap.data().items
        : portfolioData.education,
      certificates: certificatesSnap.exists()
        ? certificatesSnap.data().items
        : portfolioData.certificates,
    }
  } catch (error) {
    console.warn('Firestore fetch failed, using local data:', error.message)
    return portfolioData
  }
}

export async function submitContactMessage({ name, email, message }) {
  if (!isFirebaseConfigured() || !db) {
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.info('Contact message (demo mode):', { name, email, message })
    return { success: true, demo: true }
  }

  await addDoc(collection(db, 'messages'), {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    createdAt: serverTimestamp(),
    read: false,
  })

  return { success: true, demo: false }
}
