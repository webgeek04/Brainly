import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { ShareIcon } from "../icons/ShareIcon";

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BrainIcon size="xl" />,
      title: "Organize Your Knowledge",
      description: "Save and categorize your favorite content from across the web in one centralized brain."
    },
    {
      icon: <TwitterIcon />,
      title: "Twitter Integration",
      description: "Seamlessly save and display your favorite tweets with embedded previews."
    },
    {
      icon: <YoutubeIcon />,
      title: "YouTube Videos",
      description: "Store YouTube videos with embedded players for easy access and viewing."
    },
    {
      icon: <ShareIcon size="xl" />,
      title: "Share Your Brain",
      description: "Generate shareable links to showcase your curated content collection with others."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <BrainIcon size="2xl" />
              <span className="text-2xl font-bold text-slate-800">Brainly</span>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="secondary"
                size="sm"
                text="Sign In"
                onClick={() => navigate("/signin")}
              />
              <Button
                variant="primary"
                size="sm"
                text="Get Started"
                onClick={() => navigate("/signup")}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-indigo-100 rounded-full">
                <BrainIcon size="4xl" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Your Second Brain for
              <span className="text-indigo-600 block">Digital Content</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Capture, organize, and share your favorite tweets, videos, and web content. 
              Build your personal knowledge repository and never lose track of valuable information again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                text="Start Building Your Brain"
                onClick={() => navigate("/signup")}
              />
              <Button
                variant="secondary"
                size="lg"
                text="See How It Works"
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              />
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-20 h-20 bg-indigo-300 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <div className="w-16 h-16 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-20">
          <div className="w-12 h-12 bg-purple-300 rounded-full animate-pulse delay-500"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Organize Knowledge
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful features designed to help you capture, organize, and share your digital discoveries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-50 rounded-2xl hover:bg-indigo-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Simple. Powerful. Effective.
            </h2>
            <p className="text-xl text-slate-600">
              Get started in three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Sign Up
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Create your account and start building your personal knowledge repository in seconds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Add Content
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Save tweets, YouTube videos, and other content with just a few clicks. Everything is organized automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Share & Discover
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Generate shareable links to showcase your curated content and discover insights from your collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Second Brain?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Join thousands of users who are already organizing their digital knowledge with Brainly.
            Start your journey today and never lose track of valuable content again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              text="Get Started Free"
              onClick={() => navigate("/signup")}
            />
            <button
              onClick={() => navigate("/signin")}
              className="px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-md hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Already have an account?
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <BrainIcon size="xl" />
              <span className="text-xl font-bold">Brainly</span>
            </div>
            <div className="text-slate-400">
              <p>&copy; 2025 Brainly. Your second brain for digital content.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}