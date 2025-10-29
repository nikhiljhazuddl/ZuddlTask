import mongoose from "mongoose"
import User from "./models/user.model.js"
import dotenv from "dotenv"

dotenv.config()

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully")
    updateUserRoles()
  })
  .catch((err) => {
    console.log("Error connecting to database:", err)
    process.exit(1)
  })

async function updateUserRoles() {
  try {
    // Find all users who are currently admins
    const adminUsers = await User.find({ role: "admin" })

    console.log(`Found ${adminUsers.length} admin users`)

    if (adminUsers.length === 0) {
      console.log("No admin users found to update")
      process.exit(0)
    }

    // Display admin users
    console.log("\nAdmin users:")
    adminUsers.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} (${user.email})`)
    })

    // Update specific users to "user" role
    // You can modify this array to include only the users you want to convert
    const emailsToUpdate = [
      "nikhil.jha@zuddl.com",
      "Dinesh.S@zuddl.com",
      "dona.j@zuddl.com",
    ]

    const result = await User.updateMany(
      { email: { $in: emailsToUpdate }, role: "admin" },
      { $set: { role: "user" } }
    )

    console.log(`\nUpdated ${result.modifiedCount} user(s) from admin to user role`)

    // Verify the update
    const updatedUsers = await User.find({ email: { $in: emailsToUpdate } })
    console.log("\nUpdated users:")
    updatedUsers.forEach((user) => {
      console.log(`- ${user.name} (${user.email}): ${user.role}`)
    })

    process.exit(0)
  } catch (error) {
    console.error("Error updating user roles:", error)
    process.exit(1)
  }
}
