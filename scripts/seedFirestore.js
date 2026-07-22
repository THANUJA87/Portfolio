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

async function seed() {
  try {
    // 1. Profile remains a single document in 'portfolio' collection
    await db.collection("portfolio").doc("profile").set(portfolioData.profile);
    console.log("✅ Uploaded: portfolio/profile");

    // 2. Collection based items
    const collections = [
      { name: "skillCategories", data: portfolioData.skillCategories },
      { name: "projects", data: portfolioData.projects },
      { name: "experience", data: portfolioData.experience },
      { name: "education", data: portfolioData.education },
      { name: "certificates", data: portfolioData.certificates },
    ];

    for (const col of collections) {
      for (const item of col.data) {
        if (item.id) {
          // Use item.id if available
          await db.collection(col.name).doc(item.id).set(item);
        } else {
          // Otherwise add document with auto-generated ID
          await db.collection(col.name).add(item);
        }
      }
      console.log(`✅ Uploaded collection: ${col.name} (${col.data.length} items)`);
    }

    console.log("\n🎉 Firestore seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding Firestore:", error);
  }
}

seed();