import mongoose from "mongoose"
import User from "./models/user.model.js"
import dotenv from "dotenv"

dotenv.config()

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully")
    makeEveryoneAdmin()
  })
  .catch((err) => {
    console.log("Error connecting to database:", err)
    process.exit(1)
  })

async function makeEveryoneAdmin() {
  try {
    // Find all users
    const allUsers = await User.find({})

    console.log(`\nFound ${allUsers.length} user(s) in the system`)
    console.log("\nCurrent users:")
    allUsers.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} (${user.email}) - Role: ${user.role}`)
    })

    // Update all users to admin role
    const result = await User.updateMany(
      {},
      { $set: { role: "admin" } }
    )

    console.log(`\n✅ Updated ${result.modifiedCount} user(s) to admin role`)

    // Verify the update
    const updatedUsers = await User.find({})
    console.log("\n📊 All users are now admins:")
    updatedUsers.forEach((user) => {
      console.log(`   ✓ ${user.name} (${user.email}): ${user.role}`)
    })

    console.log("\n🎉 Success! Everyone in the workspace now has admin privileges!")
    console.log("Note: Users need to log out and log back in to refresh their access token.")

    process.exit(0)
  } catch (error) {
    console.error("Error updating user roles:", error)
    process.exit(1)
  }
}
