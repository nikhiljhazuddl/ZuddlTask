import React from "react"

const AvatarGroup = ({ avatars, maxVisible = null }) => {
  const displayAvatars = maxVisible ? avatars.slice(0, maxVisible) : avatars
  const hasMore = maxVisible && avatars.length > maxVisible

  return (
    <div className="flex items-center -space-x-2">
      {displayAvatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt={`Avatar-${index + 1}`}
          className="w-9 h-9 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform duration-200 cursor-pointer"
        />
      ))}

      {hasMore && (
        <div className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-semibold text-white rounded-full border-2 border-white shadow-sm">
          +{avatars.length - maxVisible}
        </div>
      )}
    </div>
  )
}

export default AvatarGroup
