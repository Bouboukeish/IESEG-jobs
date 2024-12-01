'use client'
import { useState } from 'react';

interface ProfileFormData {
  name: string;
  surname: string;
  description: string;
  cv: File | null;
  schedule: {
    [key: string]: {
      morning?: boolean;
      afternoon?: boolean;
      evening?: boolean;
    };
  } | null;
  pastExperience: string;
  profilePicture: File | null;
}

const companyOffers = [
  {
    company: "L'Oréal",
    logo: "/loreal.png",
    position: "Beauty Product Tester",
    description: "Test and provide feedback on new beauty products. Perfect for students interested in cosmetics and skincare.",
    type: "Testing Mission",
    location: "Paris",
    duration: "3 days",
    compensation: "150€",
    skills: ["Product Testing", "Feedback Writing", "Attention to Detail"]
  },
  {
    company: "Decathlon",
    logo: "/decathlon.png",
    position: "Weekend Sports Event Helper",
    description: "Help organize and run a weekend sports tournament. Great for sports enthusiasts.",
    type: "Event Mission",
    location: "Lille",
    duration: "2 days",
    compensation: "120€",
    skills: ["Event Support", "Team Spirit", "Sports"]
  },
  {
    company: "Carrefour",
    logo: "/carrefour.png",
    position: "Customer Survey Assistant",
    description: "Conduct in-store customer satisfaction surveys over a weekend. Flexible hours.",
    type: "Research Mission",
    location: "Multiple Locations",
    duration: "2 days",
    compensation: "100€",
    skills: ["Communication", "Data Collection", "Customer Service"]
  },
  {
    company: "BNP Paribas",
    logo: "/bnp.png",
    position: "Student Banking Ambassador",
    description: "Promote student banking services at university campus for a day. Training provided.",
    type: "Promotion Mission",
    location: "On Campus",
    duration: "1 day",
    compensation: "80€",
    skills: ["Communication", "Sales", "Student Relations"]
  },
  {
    company: "UNESCO",
    logo: "/unesco.png",
    position: "Cultural Event Assistant",
    description: "Support the organization of a one-day cultural exhibition. Perfect for culture enthusiasts.",
    type: "Cultural Mission",
    location: "Paris",
    duration: "1 day",
    compensation: "90€",
    skills: ["Event Support", "Cultural Awareness", "Organization"]
  },
  {
    company: "Médecins Sans Frontières",
    logo: "/msf.png",
    position: "Donation Drive Helper",
    description: "Assist in organizing a weekend donation drive. Make a real impact in just two days.",
    type: "Charity Mission",
    location: "Multiple Locations",
    duration: "2 days",
    compensation: "100€",
    skills: ["Fundraising", "Community Work", "Organization"]
  }
];

export default function ProfileForm() {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    surname: '',
    description: '',
    cv: null,
    schedule: null,
    pastExperience: '',
    profilePicture: null
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, profilePicture: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-7xl mx-auto">
      <div className="lg:w-1/3 bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-xl shadow-lg p-8 border border-purple-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className={`w-36 h-36 rounded-full overflow-hidden border-4 border-indigo-200 ${
                !previewUrl ? 'bg-gradient-to-r from-indigo-100 to-purple-100' : ''
              } shadow-xl transition-all duration-300 hover:scale-105`}>
                {previewUrl ? (
                  <img 
                    src={previewUrl} 
                    alt="Profile preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-indigo-600 text-2xl font-semibold">
                    {formData.name && formData.surname 
                      ? `${formData.name[0]}${formData.surname[0]}`
                      : 'Add Photo'}
                  </div>
                )}
              </div>
              <label className="absolute bottom-2 right-2 bg-white rounded-full p-3 shadow-lg cursor-pointer border border-indigo-200 hover:bg-indigo-50 transition-all duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                </svg>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-indigo-900 mb-2">First Name</label>
                <input 
                  type="text"
                  className="w-full p-3 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 transition-all bg-white/50 shadow-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-indigo-900 mb-2">Last Name</label>
                <input 
                  type="text"
                  className="w-full p-3 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 transition-all bg-white/50 shadow-sm"
                  value={formData.surname}
                  onChange={(e) => setFormData({...formData, surname: e.target.value})}
                  placeholder="Enter your surname"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-indigo-900 mb-2">About Me</label>
              <textarea 
                className="w-full p-4 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 transition-all bg-white/50 shadow-sm min-h-[120px]"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Tell us about yourself..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-indigo-900 mb-2">Upload CV</label>
              <div className="mt-1 p-6 border-2 border-indigo-200 border-dashed rounded-lg hover:border-indigo-400 transition-all bg-indigo-50/30">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-indigo-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="mt-4 flex text-sm justify-center">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 px-4 py-2 shadow-sm border border-indigo-200">
                      <span>Upload CV</span>
                      <input 
                        type="file" 
                        className="sr-only"
                        onChange={(e) => setFormData({...formData, cv: e.target.files?.[0] || null})}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-indigo-500 mt-2">PDF up to 10MB</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-indigo-900 mb-4">Your Availability Schedule</label>
              <div className="border border-indigo-100 rounded-xl p-4 bg-white shadow-sm">
                <div className="space-y-6">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="flex items-center space-x-4">
                      <div className="w-20 text-sm font-medium text-indigo-900">{day}</div>
                      <div className="flex-1 flex gap-3">
                        <label className="flex-1 relative inline-flex items-center cursor-pointer group">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            onChange={(e) => {
                              const updatedSchedule = formData.schedule || {};
                              updatedSchedule[day.toLowerCase()] = {
                                ...updatedSchedule[day.toLowerCase()],
                                morning: e.target.checked
                              };
                              setFormData({ ...formData, schedule: updatedSchedule });
                            }}
                          />
                          <div className="w-full h-10 bg-indigo-50 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-lg peer-checked:bg-indigo-200 transition-all flex items-center justify-center text-sm group-hover:bg-indigo-100">
                            <span className="flex items-center gap-2 text-indigo-900 font-medium">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                              </svg>
                              Morning
                            </span>
                          </div>
                        </label>

                        <label className="flex-1 relative inline-flex items-center cursor-pointer group">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            onChange={(e) => {
                              const updatedSchedule = formData.schedule || {};
                              updatedSchedule[day.toLowerCase()] = {
                                ...updatedSchedule[day.toLowerCase()],
                                afternoon: e.target.checked
                              };
                              setFormData({ ...formData, schedule: updatedSchedule });
                            }}
                          />
                          <div className="w-full h-10 bg-indigo-50 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-lg peer-checked:bg-indigo-200 transition-all flex items-center justify-center text-sm group-hover:bg-indigo-100">
                            <span className="flex items-center gap-2 text-indigo-900 font-medium">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                              </svg>
                              Afternoon
                            </span>
                          </div>
                        </label>

                        <label className="flex-1 relative inline-flex items-center cursor-pointer group">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            onChange={(e) => {
                              const updatedSchedule = formData.schedule || {};
                              updatedSchedule[day.toLowerCase()] = {
                                ...updatedSchedule[day.toLowerCase()],
                                evening: e.target.checked
                              };
                              setFormData({ ...formData, schedule: updatedSchedule });
                            }}
                          />
                          <div className="w-full h-10 bg-indigo-50 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-lg peer-checked:bg-indigo-200 transition-all flex items-center justify-center text-sm group-hover:bg-indigo-100">
                            <span className="flex items-center gap-2 text-indigo-900 font-medium">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                              </svg>
                              Evening
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-4 text-xs text-indigo-600">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-indigo-50"></div>
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-indigo-200"></div>
                    <span>Selected</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-indigo-500 mt-2">Select your available time slots for quick missions</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-indigo-900 mb-2">Past Experience</label>
              <textarea 
                className="w-full p-4 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 transition-all bg-white/50 shadow-sm min-h-[120px]"
                value={formData.pastExperience}
                onChange={(e) => setFormData({...formData, pastExperience: e.target.value})}
                placeholder="Tell us about your past experience..."
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 px-6 rounded-lg hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            Submit Application
          </button>
        </form>
      </div>

      <div className="lg:w-2/3 bg-white rounded-xl shadow-sm p-8 border border-slate-100">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Quick Student Missions</h2>
        <p className="text-slate-500 mb-6">Short-term opportunities to gain real experience</p>
        <div className="grid gap-4">
          {companyOffers.map((offer, index) => (
            <div key={index} className="p-6 border border-slate-100 rounded-lg hover:border-slate-200 transition-all cursor-pointer bg-white hover:shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-50 p-2 border border-slate-100 flex items-center justify-center">
                  <img 
                    src={offer.logo} 
                    alt={`${offer.company} icon`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">{offer.position}</h3>
                  <p className="text-slate-500 text-sm">{offer.company}</p>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    {offer.duration}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-sm">{offer.type}</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">{offer.location}</span>
                {offer.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 