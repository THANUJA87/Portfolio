import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../firebase'
import { portfolioData } from '../data/portfolioData'

function parseSnapItems(snap, fallbackData) {
  if (!snap || snap.empty) return fallbackData

  const items = []
  snap.docs.forEach((doc) => {
    const data = doc.data()
    if (Array.isArray(data.items)) {
      items.push(...data.items)
    } else {
      items.push({ id: doc.id, ...data })
    }
  })

  return items.length > 0 ? items : fallbackData
}

export async function fetchPortfolioData() {
  if (!isFirebaseConfigured() || !db) {
    return portfolioData
  }

  try {
    const [
      profileSnap,
      skillsSnap,
      projectsSnap,
      experienceSnap,
      educationSnap,
      certificatesSnap,
    ] = await Promise.all([
      getDoc(doc(db, 'portfolio', 'profile')),
      getDocs(collection(db, 'skillCategories')),
      getDocs(collection(db, 'projects')),
      getDocs(collection(db, 'experience')),
      getDocs(collection(db, 'education')),
      getDocs(collection(db, 'certificates')),
    ])

    return {
      profile: profileSnap.exists() ? profileSnap.data() : portfolioData.profile,
      skillCategories: parseSnapItems(skillsSnap, portfolioData.skillCategories),
      projects: parseSnapItems(projectsSnap, portfolioData.projects),
      experience: parseSnapItems(experienceSnap, portfolioData.experience),
      education: parseSnapItems(educationSnap, portfolioData.education),
      certificates: parseSnapItems(certificatesSnap, portfolioData.certificates),
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
