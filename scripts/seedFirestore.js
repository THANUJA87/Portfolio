import { readFileSync } from "fs";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { portfolioData } from "../src/data/portfolioData.js";

const serviceAccount = JSON.parse(
  readFileSync("./serviceAccountKey.json", "utf8")
);

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const documents = [
  { docId: "profile", data: portfolioData.profile },
  { docId: "skillCategories", data: { items: portfolioData.skillCategories } },
  { docId: "projects", data: { items: portfolioData.projects } },
  { docId: "experience", data: { items: portfolioData.experience } },
  { docId: "education", data: { items: portfolioData.education } },
  { docId: "certificates", data: { items: portfolioData.certificates } },
];

async function seed() {
  try {
    for (const doc of documents) {
      await db.collection("portfolio").doc(doc.docId).set(doc.data);
      console.log(`✅ Uploaded: portfolio/${doc.docId}`);
    }

    console.log("\n🎉 Firestore seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding Firestore:", error);
  }
}

seed();