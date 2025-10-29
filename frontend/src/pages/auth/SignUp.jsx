import React, { useState } from "react"
import AuthLayout from "../../components/AuthLayout"
import { FaEyeSlash, FaPeopleGroup } from "react-icons/fa6"
import { FaEye } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { validateEmail } from "../../utils/helper"
import ProfilePhotoSelector from "../../components/ProfilePhotoSelector"
import axiosInstance from "../../utils/axioInstance"
import uploadImage from "../../utils/uploadImage"

const SignUp = () => {
  const navigate = useNavigate()

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
  const [profilePic, setProfilePic] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let profileImageUrl = ""

    if (!fullName) {
      setError("Please enter the name")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    if (!password) {
      setError("Please enter the password")
      return
    }

    setError(null)

    // SignUp API call
    try {
      // Upload profile picture if present
      if (profilePic) {
        const imageUploadRes = await uploadImage(profilePic)
        profileImageUrl = imageUploadRes.imageUrl || ""
      }

      const response = await axiosInstance.post("/auth/sign-up", {
        name: fullName,
        email,
        password,
        profileImageUrl,
      })

      if (response.data) {
        navigate("/login")
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message)
      } else {
        setError("Something went wrong. Please try again!")
      }
    }
  }

  return (
    <AuthLayout>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Gradient top border */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500"></div>

        <div className="p-8 sm:p-10">
          {/* Logo and title */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
                <FaPeopleGroup className="text-4xl text-white" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Join Task Zuddl
            </h1>

            <p className="text-gray-600 text-sm">
              Dinesh's internal Team workspace
            </p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <ProfilePhotoSelector
              image={profilePic}
              setImage={setProfilePic}
            />

            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name
              </label>

              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your Full Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 transition-all duration-200"
                  placeholder="••••••••"
                  required
                />

                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-gray-700 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default SignUp
