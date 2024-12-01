import Header from '@/components/Header';
import ProfileForm from '@/components/ProfileForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-4xl font-bold text-slate-700">
              Student Quick Missions Portal
            </h1>
            <p className="text-slate-500 text-lg">
              Gain real-world experience through short-term projects across various fields
            </p>
          </div>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}
