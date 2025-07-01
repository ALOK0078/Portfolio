import React, { useState, useEffect ,FormEvent} from "react";
import { Moon, Sun, Download, Mail, Github, Linkedin, Instagram, ExternalLink, Home, FolderOpen, Briefcase, Menu, X, ChevronDown, ChevronUp, InstagramIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/hooks/use-toast";
import TypingEffect from "@/components/TypingEffect";

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };
  const [status, setStatus] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const response = await fetch("https://formspree.io/f/xwpbyrze", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", // IMPORTANT!
      },
      body: JSON.stringify(data), // Send as JSON
    });

    if (response.ok) {
      setStatus("Thank you! Your message has been sent.");
      form.reset();
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
    } else {
      setStatus("Oops! Something went wrong. Please try again.");
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setStatus("Sending...");

  //   const formData = new FormData(e.currentTarget);

  //   const response = await fetch("https://formspree.io/f/xwpbyrze", {
  //     method: "POST",
  //     body: formData,
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   });
  //   toast({
  //     title: "Message sent!",
  //     description: "Thanks for reaching out. I'll get back to you within 24 hours.",
  //   });
  // };



  const handleSocialClick = (platform: string, url: string) => {
    window.open(url, '_blank');
    toast({
      title: `Opening ${platform}`,
      description: `Redirecting to ${platform}...`,
    });
  };

  const handleMailClick = () => {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=alokkumar0709003@gmail.com&su=Hello&body=I want to get in touch with you.`;
  window.open(gmailUrl, "_blank");
};

  const handleResumeDownload = () => {
    const resumeUrl = "https://drive.google.com/file/d/1je8tmJDpJr__GrR9XO2SYEdKWwb__Iu3/view?usp=drive_link";
    window.open(resumeUrl, "_blank");
  };

  const techStackRow1 = [
    {
      name: "JavaScript.js",
      icon: (
        <img
          src="/icons/JavaScript.svg"
          alt="JavaScript icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
    {
      name: "Node.js",
      icon: (
        <img
          src="/icons/Node.js.svg"
          alt="Node.js icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
    {
      name: "TailWind",
      icon: (
        <img
          src="/icons/Tailwind.svg"
          alt="TailWind CSS icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
    {
      name: "Express",
      icon: (
        <img
          src="/icons/Express.svg"
          alt="Express.js icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
    {
      name: "Redis",
      icon: (
        <img
          src="/icons/Redis.svg"
          alt="Redis.js icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
    {
      name: "TensorFlow",
      icon: (
        <img
          src="/icons/TensorFlow.svg"
          alt="TensorFlow icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
    {
      name: "CSS3.js",
      icon: (
        <img
          src="/icons/CSS3.svg"
          alt="CSS3 icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
    {
      name: "Numpy",
      icon: (
        <img
          src="/icons/NumPy.svg"
          alt="Numpy icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
  ];

  const techStackRow2 = [
    {
      name: "React",
      icon: (
        <img
          src="/icons/React.svg"
          alt="React icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
      {
        name: "Next.js",
        icon: (
          <img
            src="/icons/nextjs2.svg"
            alt="Next.js icon"
            width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
      {
        name: "TypeScript",
        icon: (
          <img
            src="/icons/TypeScript.svg"
            alt="TypeScript icon"
            width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
    {
      name: "C++",
      icon: (
        <img
          src="/icons/C++(CPlusPlus).svg"
          alt="C++ icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
      {
      name: "LangChain",
      icon: (
        <img
          src="/icons/langchain-color.svg"
          alt="LangChain icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
    {
      name: "Keras.js",
      icon: (
        <img
          src="/icons/Keras.svg"
          alt="Keras icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
    {
      name: "Python",
      icon: (
        <img
          src="/icons/Python.svg"
          alt="Python icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
    {
      name: "PostgreSQL",
      icon: (
        <img
          src="/icons/PostgresSQL.svg"
          alt="PostgreSQL icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
      {
      name: "Jupyter",
      icon: (
        <img
          src="/icons/Jupyter.svg"
          alt="Jupyter icon"
          width={24}
            height={24}
          />
        ),
        color: "from-orange-300 to-orange-500"
      },
  ];

  const projects = [
    {
      title: "MeetAI Agent",
      description: "Next.js 15 / Inngest / OpenAI / Stream SDK / BetterAuth / Polar",
      fullDescription: "An AI-powered video calling app that delivers smart meeting experiences with real-time agents, transcripts, and summaries. Includes video playback, searchable transcripts, and an AI chat that understands meeting context.",
      image: "/images/meetai-agnet.png",
      githubUrl: "https://github.com/ALOK0078/ai-agent-meet/",
      liveUrl: "https://ai-agent-meet.vercel.app/"
    },
    {
      title: "DOCS Clone",
      description: "Next.js 15 / React / TipTap / Tailwind / Shadcn / Clerk",
      fullDescription: "A full-featured Google Docs clone with real-time collaboration, rich text editing, comments, and document templates. Includes organization workspaces, authentication, export options, and a modern, responsive editing experience.",
      image: "/images/docs-clone-screenshot.png",
      githubUrl: "https://github.com/ALOK0078/Googel_docs_clone",
      liveUrl: "https://googel-docs-clone.vercel.app/"
    },
    {
      title: "AI Companion",
      description: "Next.js / PineCone / Prisma / OpenAi / Langraph / Stripe",
      fullDescription: "An AI-powered companion platform that remembers past conversations, offers intelligent responses, and adapts over time.It supports personalized interactions, user accounts, and seamless subscription-based access.",
      image: "/images/AI-COMPANION.png",
      githubUrl: "https://github.com/ALOK0078/ai_companion_1",
      liveUrl: "https://ai-companion-1-1001.vercel.app/"
    },
    {
      title: "YouTube Agent",
      description: "Next 15 / Langchain / Convex / IBM wxflows / Claude / TS",
      fullDescription: "An intelligent AI Agent that analyzes YouTube videos by generating transcripts, switching tools autonomously, and handling failures smartly.It delivers real-time, context-aware chat experiences with custom streaming, prompt caching, and seamless tool orchestration.",
      image: "/images/ai-agent.png",
      githubUrl: "https://github.com/ALOK0078/youtube-ai-agent",
      liveUrl: "https://youtube-ai-agent-beta.vercel.app/"
    }
  ];

  const certifications = [
    {
      title: "Neural Networks and Deep Learning",
      description: "Deep learning specialization by Andrew Ng on Coursera",
      issuer: "Coursera , DeepLearning.AI , Stanford University",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/records/ZZXM4M4CUBHJ"
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Architecting",
      description: "AWS Academy certification for cloud architecture and design",
      issuer: "AWS Academy",
      year: "2025",
      link: "https://www.credly.com/badges/ba4f4e85-c680-4d6e-9be2-102caecf7073/linked_in_profile"
    },
    {
      title: "Machine Learning Specialization",
      description: "Professional certificate for machine learning from Andrew Ng",
      issuer: "Coursera , DeepLearning.AI , Stanford University",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/specialization/A6QG4C8C6XCS"
    },
    {
      title: "Advanced Learning Algorithms",
      description: "Professional certificate for advanced learning algorithms from Coursera",
      issuer: "Coursera , DeepLearning.AI , Stanford University",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/records/79EGEF8DUAQY"
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      description: "Machine learning certification for Unsupervised Learning , Recommenders , Reinforcement Learning frameworks",
      issuer: "Coursera , DeepLearning.AI , Stanford University",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/records/MXB9EFPMPKXC"
    }
  ];

  const visibleCertifications = showAllCertifications ? certifications : certifications.slice(0, 3);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-black' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isDark 
          ? 'bg-black/20 border-white/10' 
          : 'bg-white/80 border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-600 p-2 rounded-lg">
                <span className="text-white font-bold text-xl">AK</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('hero')}
                className={`transition-colors ${
                  isDark 
                    ? 'text-white hover:bg-transparent hover:text-amber-200' 
                    : 'text-gray-700 hover:bg-transparent hover:text-amber-600'
                }`}
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('projects')}
                className={`transition-colors ${
                  isDark 
                    ? 'text-white hover:bg-transparent hover:text-amber-200' 
                    : 'text-gray-700 hover:bg-transparent hover:text-amber-600'
                }`}
              >
                <FolderOpen className="mr-2 h-4 w-4" />
                Projects
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('experience')}
                className={`transition-colors ${
                  isDark 
                    ? 'text-white hover:bg-transparent hover:text-amber-200' 
                    : 'text-gray-700 hover:bg-transparent hover:text-amber-600'
                }`}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Work Experience
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                className={`transition-colors ${
                  isDark 
                    ? 'text-white hover:bg-transparent hover:text-amber-200' 
                    : 'text-gray-700 hover:bg-transparent hover:text-amber-600'
                }`}
              >
                Contact
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={handleMailClick}
                className={`hidden sm:flex transition-colors ${
                  isDark 
                    ? 'text-white hover:bg-transparent hover:text-amber-200' 
                    : 'text-gray-700 hover:bg-transparent hover:text-amber-600'
                }`}
              >
                <Mail className="mr-2 h-4 w-4" />
                Mail
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className={`transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' 
                    : 'bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-700'
                } backdrop-blur-sm`}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden transition-colors ${
                  isDark 
                    ? 'text-white hover:bg-transparent hover:text-amber-200' 
                    : 'text-gray-700 hover:bg-transparent hover:text-amber-600'
                }`}
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md rounded-lg mt-2 mb-2 ${
                isDark ? 'bg-black/40' : 'bg-white/90'
              }`}>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection('hero')}
                  className={`w-full justify-start transition-colors ${
                    isDark 
                      ? 'text-white hover:bg-transparent hover:text-amber-200' 
                      : 'text-gray-700 hover:bg-transparent hover:text-amber-600'
                  }`}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection('projects')}
                  className={`w-full justify-start transition-colors ${
                    isDark 
                      ? 'text-white hover:bg-transparent hover:text-amber-200' 
                      : 'text-gray-700 hover:bg-transparent hover:text-amber-600'
                  }`}
                >
                  <FolderOpen className="mr-2 h-4 w-4" />
                  Projects
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection('experience')}
                  className={`w-full justify-start transition-colors ${
                    isDark 
                      ? 'text-white hover:bg-transparent hover:text-amber-200' 
                      : 'text-gray-700 hover:bg-transparent hover:text-amber-600'
                  }`}
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Work Experience
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection('contact')}
                  className={`w-full justify-start transition-colors ${
                    isDark 
                      ? 'text-white hover:bg-transparent hover:text-amber-200' 
                      : 'text-gray-700 hover:bg-transparent hover:text-amber-600'
                  }`}
                >
                  Contact
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleMailClick}
                  className={`w-full justify-start transition-colors sm:hidden ${
                    isDark 
                      ? 'text-white hover:bg-transparent hover:text-amber-200' 
                      : 'text-gray-700 hover:bg-transparent hover:text-amber-600'
                  }`}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Mail
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-0 relative overflow-hidden">
        <div className={`absolute inset-0 animate-pulse ${
          isDark 
            ? 'bg-gradient-to-r from-blue-600/10 to-blue-500/10' 
            : 'bg-gradient-to-r from-blue-100/50 to-blue-200/50'
        }`}></div>
        <div className="text-center space-y-6 sm:space-y-8 relative z-10 max-w-4xl mx-auto">
          <div className="space-y-4 animate-fade-in">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${
              isDark 
                ? 'text-white' 
                : 'text-gray-900'
            }`} style={{
              textShadow: isDark 
                ? '0 0 8px rgba(59, 130, 246, 0.15), 0 0 16px rgba(6, 182, 212, 0.1)' 
                : '0 0 8px rgba(59, 130, 246, 0.1), 0 0 16px rgba(6, 182, 212, 0.08)'
            }}>
              Hey, I'm Alok Kumar
            </h1>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-medium min-h-[2.5rem] ${
              isDark 
                ? 'text-gray-300' 
                : 'text-gray-700'
            }`}>
              <TypingEffect 
                texts={["Full Stack Developer", "GenAI/Agentic AI Developer" , "ML/DL Enthusiast"]} 
                speed={100} 
                delay={300}
                isDark={isDark}
              />
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 ${
              isDark 
                ? 'text-gray-400' 
                : 'text-gray-600'
            }`} style={{
              textShadow: isDark 
                ? '0 0 5px rgba(156, 163, 175, 0.1)' 
                : '0 0 5px rgba(75, 85, 99, 0.08)'
            }}>
              Building full-stack apps with AI integration and scalable web architecture.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:justify-center gap-4 sm:space-x-4 animate-fade-in px-4">
            <Button 
              variant="outline" 
              className={`transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-white/10 border-white/20 hover:bg-blue-600/50 text-white' 
                  : 'bg-white border-gray-300 hover:bg-blue-600/80 text-gray-700'
              }`}
              onClick={() => handleSocialClick('LinkedIn', 'https://www.linkedin.com/in/alok-kumar-1578a7371/')}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              className={`transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-white/10 border-white/20 hover:bg-white/60 text-white' 
                  : 'bg-white border-gray-300 hover:bg-black/40 text-gray-700'
              }`}
              onClick={() => handleSocialClick('GitHub', 'https://github.com/ALOK0078')}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              className={`transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-white/10 border-white/20 hover:bg-[#FFA116]/60 text-white' 
                  : 'bg-white border-gray-300 hover:bg-[#FFA116]/80 text-gray-700'
              }`}

              onClick={() => handleSocialClick('LeetCode', 'https://leetcode.com/u/alokkumar0709003/')}
            >
              <img 
                  src="/icons/leetcode.svg" 
                  alt="LeetCode Icon" 
                  className="mr-2 h-5 w-5" 
                />
              LeetCode
            </Button>
            <Button 
              variant="outline" 
              className={`transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-white/10 border-white/20 hover:bg-[#1DA1F2]/40 text-white' 
                  : 'bg-white border-gray-300 hover:bg-[#1DA1F2]/60 text-gray-700'
              }`}

              onClick={() => handleSocialClick('Twitter', 'https://x.com/spike7_spiegel?t=v5Lu4c7b0_S9VTQ-RggoQw&s=09')}
            >
              <img 
                  src="/icons/twitter.svg" 
                  alt="Twitter Icon" 
                  className="mr-2 h-5 w-5" 
                />
              Twitter
            </Button>
            <Button 
              variant="outline" 
              className={`transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-white/10 border-white/20 hover:bg-green-600/50 text-white' 
                  : 'bg-white border-gray-300 hover:bg-green-600/80 text-gray-700'
              }`}
              onClick={handleMailClick}
            >
              <Mail className="mr-2 h-4 w-4" />
              Mail
            </Button>
          </div>

          <div className="animate-fade-in px-4">
            <Button 
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 w-full sm:w-auto"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className={`w-80 h-80 rounded-3xl overflow-hidden border-4 transition-all duration-300 hover:scale-105 relative ${
              isDark 
                ? 'border-gradient-to-r from-cyan-400/30 to-blue-500/30 bg-gradient-to-br from-cyan-600/20 to-blue-500/20' 
                : 'border-gradient-to-r from-cyan-200 to-blue-300 bg-gradient-to-br from-cyan-100 to-blue-200'
            }`} style={{
              boxShadow: isDark 
                ? '0 0 8px rgba(6, 182, 212, 0.15), 0 0 16px rgba(59, 130, 246, 0.1), 0 0 24px rgba(16, 185, 129, 0.08)' 
                : '0 0 8px rgba(6, 182, 212, 0.1), 0 0 16px rgba(59, 130, 246, 0.08), 0 0 24px rgba(16, 185, 129, 0.05)'
            }}>
              <img 
                src="/images/alokimage.jpg" 
                alt="Alok Kumar - Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${
              isDark 
                ? 'text-cyan-400' 
                : 'text-cyan-600'
            }`} style={{
              textShadow: isDark 
                ? '0 0 5px rgba(34, 211, 238, 0.15)' 
                : '0 0 5px rgba(8, 145, 178, 0.1)'
            }}>
              About Me
            </h2>
          </div>

          <Card className={`animate-fade-in ${
            isDark 
              ? 'bg-white/5 border-white/10' 
              : 'bg-white border-gray-200'
          }`}>
            <CardContent className="p-6 sm:p-8">
              <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm a passionate full-stack developer driven by curiosity and a deep interest in intelligent systems. My journey in software development is fueled by a desire to create purposeful solutions that blend thoughtful design with powerful AI capabilities. I find joy in translating abstract ideas into functional, engaging digital experiences that are both intuitive and impactful.
              </p>
              <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I’m especially drawn to the evolving space of generative and agentic AI, and how it can be harnessed to build systems that learn, adapt, and interact meaningfully with users. My curiosity drives me to explore how artificial intelligence can simulate reasoning, creativity, and memory to assist in everyday problem-solving. I also have a growing fascination with deep learning, particularly its power to model complex patterns in data and drive intelligent automation.
              </p>
              <p className={`text-base sm:text-lg leading-relaxed ${
                isDark ? 'text-amber-200' : 'text-amber-600'
              }`}>
                If you're working on something exciting in the AI or tech space, or if you’re just looking to connect, exchange ideas, or collaborate on something meaningful — I’d love to hear from you. Let’s connect, learn from each other, and build something impactful together.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark 
                ? 'text-cyan-400' 
                : 'text-cyan-600'
            }`} style={{
              textShadow: isDark 
                ? '0 0 5px rgba(34, 211, 238, 0.15)' 
                : '0 0 5px rgba(8, 145, 178, 0.1)'
            }}>
              Tech Stack
            </h2>
            <p className={`text-lg sm:text-xl ${
              isDark 
                ? 'text-gray-300' 
                : 'text-gray-600'
            }`}>
              Technologies I work with regularly
            </p>
          </div>
          
          <div className="mb-8 overflow-hidden">
            <div 
              className="flex gap-4 md:gap-8 animate-[slide-right_15s_linear_infinite] hover:animate-[slide-right_15s_linear_infinite_paused] md:animate-[slide-right_30s_linear_infinite] md:hover:animate-[slide-right_30s_linear_infinite_paused]"
                style={{
                  width: 'calc(200% + 2rem)', // Ensures smooth loop
                    }}
                  >
                    {[...techStackRow1, ...techStackRow1].map((tech, index) => (
                      <div 
                        key={`${tech.name}-${index}`}
                        className={`flex-shrink-0 w-32 h-10 md:w-48 md:h-12 rounded-full flex items-center px-3 md:px-6 gap-2 md:gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group ${
                          isDark 
                            ? 'bg-gray-800/60 border border-gray-700/50 hover:bg-gray-700/60' 
                            : 'bg-white/90 border border-gray-300/50 hover:bg-gray-50'
                        }`}
                        style={{
                          boxShadow: isDark 
                            ? '0 0 5px rgba(6, 182, 212, 0.08), 0 0 10px rgba(59, 130, 246, 0.05)' 
                            : '0 0 5px rgba(6, 182, 212, 0.05), 0 0 10px rgba(59, 130, 246, 0.03)'
                        }}
                      >
                        <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          {React.cloneElement(tech.icon, {
                            width: 16,
                            height: 16,
                            className: "md:w-6 md:h-6"
                          })}
                        </div>
                        <span className={`text-sm md:text-lg font-medium truncate ${
                          isDark ? 'text-gray-200' : 'text-gray-800'
                        }`}>
                          {tech.name}
                        </span>
                      </div>
                    ))}
              </div>
          </div>

          <div className="overflow-hidden">
             <div 
              className="flex gap-4 md:gap-8 animate-[slide-left_15s_linear_infinite] hover:animate-[slide-left_15s_linear_infinite_paused] md:animate-[slide-left_30s_linear_infinite] md:hover:animate-[slide-left_30s_linear_infinite_paused]"
                style={{
                  width: 'calc(200% + 2rem)', // Ensures smooth loop
                    }}
                  >
                    {[...techStackRow2, ...techStackRow2].map((tech, index) => (
                      <div 
                        key={`${tech.name}-${index}`}
                        className={`flex-shrink-0 w-32 h-10 md:w-48 md:h-12 rounded-full flex items-center px-3 md:px-6 gap-2 md:gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group ${
                          isDark 
                            ? 'bg-gray-800/60 border border-gray-700/50 hover:bg-gray-700/60' 
                            : 'bg-white/90 border border-gray-300/50 hover:bg-gray-50'
                        }`}
                        style={{
                          boxShadow: isDark 
                            ? '0 0 5px rgba(6, 182, 212, 0.08), 0 0 10px rgba(59, 130, 246, 0.05)' 
                            : '0 0 5px rgba(6, 182, 212, 0.05), 0 0 10px rgba(59, 130, 246, 0.03)'
                        }}
                      >
                        <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          {React.cloneElement(tech.icon, {
                            width: 16,
                            height: 16,
                            className: "md:w-6 md:h-6"
                          })}
                        </div>
                        <span className={`text-sm md:text-lg font-medium truncate ${
                          isDark ? 'text-gray-200' : 'text-gray-800'
                        }`}>
                          {tech.name}
                        </span>
                      </div>
                    ))}
              </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark 
                ? 'text-cyan-400' 
                : 'text-cyan-600'
            }`} style={{
              textShadow: isDark 
                ? '0 0 10px rgba(34, 211, 238, 0.2)' 
                : '0 0 10px rgba(8, 145, 178, 0.15)'
            }}>
              Featured Projects
            </h2>
            <p className={`text-lg sm:text-xl ${
              isDark 
                ? 'text-gray-300' 
                : 'text-gray-600'
            }`}>
              Some of my recent work
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className={`transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}
              style={{
                boxShadow: isDark 
                  ? '0 0 10px rgba(6, 182, 212, 0.15), 0 0 20px rgba(59, 130, 246, 0.1), 0 0 30px rgba(16, 185, 129, 0.08)' 
                  : '0 0 10px rgba(6, 182, 212, 0.1), 0 0 20px rgba(59, 130, 246, 0.08), 0 0 30px rgba(16, 185, 129, 0.05)'
              }}>
                <CardHeader>
                  <CardTitle className={`text-xl sm:text-2xl ${
                    isDark 
                      ? 'text-cyan-400' 
                      : 'text-cyan-600'
                  }`}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className={isDark ? 'text-amber-200' : 'text-amber-600'}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-32 sm:h-48 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className={`text-[13px] sm:text-[15px] ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {project.fullDescription}
                  </p>
                  <div className="flex flex-row space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`flex-1 transition-colors ${
                        isDark 
                          ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' 
                          : 'bg-white border-gray-300 hover:bg-gray-50 text-gray-700'
                      }`}
                      onClick={() => handleSocialClick('GitHub', project.githubUrl)}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white flex-1"
                      onClick={() => handleSocialClick('Live Demo', project.liveUrl)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => handleSocialClick('GitHub', 'https://github.com/alokkumar')}
              className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gray-500/25"
            >
              <Github className="mr-2 h-5 w-5" />
              View More Projects on GitHub
            </Button>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark 
                ? 'text-cyan-400' 
                : 'text-cyan-600'
            }`} style={{
              textShadow: isDark 
                ? '0 0 10px rgba(34, 211, 238, 0.2)' 
                : '0 0 10px rgba(8, 145, 178, 0.15)'
            }}>
              Work Experience
            </h2>
            <p className={`text-lg sm:text-xl ${
              isDark 
                ? 'text-gray-300' 
                : 'text-gray-600'
            }`}>
              My professional journey
            </p>
          </div>

          <div className="space-y-8">
            <Card className={`transition-all duration-300 animate-fade-in ${
              isDark 
                ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                : 'bg-white border-gray-200 hover:bg-gray-50'
            }`}>
              <CardHeader>
                <CardTitle className={`text-xl sm:text-2xl ${
                  isDark 
                    ? 'text-cyan-400' 
                    : 'text-cyan-600'
                }`}>
                  Vocational Trainee
                </CardTitle>
                <CardDescription className={ `text-md ${isDark ? 'text-amber-200' : 'text-amber-600'}`}>DRDO (Defence Research and Development Organisation) • May2024 – June 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-2 text-sm sm:text-base ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <li>• Designed and implemented a tracking analysis system in C++ and OOP design concepts that improved target
 tracking accuracy by 18% in simulated multi-sensor network environments.</li>
                  <li>• Retrieved and processed real-time data from multicast servers using socket programming, handling over 10,000
 data packets during tests.</li>
                  <li>• Plotted tracking metrics and calculated error rates to evaluate system performance.</li>
                  <li>• Built a Qt-based GUI tool enabling real-time visualization of sensor behavior, reducing analysis time by 40%.</li>
                  <li>• Worked with senior scientists and research team to develop and test tracking algorithms under varied conditions.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark 
                ? 'text-cyan-400' 
                : 'text-cyan-600'
            }`} style={{
              textShadow: isDark 
                ? '0 0 5px rgba(34, 211, 238, 0.15)' 
                : '0 0 5px rgba(8, 145, 178, 0.1)'
            }}>
              Certifications
            </h2>
            <p className={`text-lg sm:text-xl ${
              isDark 
                ? 'text-gray-300' 
                : 'text-gray-600'
            }`}>
              Professional certifications and achievements
            </p>
          </div>

          <div className="space-y-6">
            {visibleCertifications.map((cert, index) => (
              <Card key={cert.title} className={`transition-all duration-300 animate-fade-in ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className={`text-xl sm:text-2xl ${
                        isDark 
                          ? 'text-cyan-400' 
                          : 'text-cyan-600'
                      }`}>
                        {cert.title}
                      </CardTitle>
                      <CardDescription className={isDark ? 'text-amber-200' : 'text-amber-600'}>
                        {cert.issuer} • {cert.year}
                      </CardDescription>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`transition-colors ${
                        isDark 
                          ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' 
                          : 'bg-white border-gray-300 hover:bg-gray-50 text-gray-700'
                      }`}
                      onClick={() => window.open(cert.link, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm sm:text-base ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
            
            {certifications.length > 3 && (
              <div className="text-center">
                <Button 
                  variant="outline"
                  onClick={() => setShowAllCertifications(!showAllCertifications)}
                  className={`transition-colors ${
                    isDark 
                      ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' 
                      : 'bg-white border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {showAllCertifications ? (
                    <>
                      <ChevronUp className="mr-2 h-4 w-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="mr-2 h-4 w-4" />
                      View All Certifications
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark 
                ? 'text-cyan-400' 
                : 'text-cyan-600'
            }`} style={{
              textShadow: isDark 
                ? '0 0 10px rgba(34, 211, 238, 0.2)' 
                : '0 0 10px rgba(8, 145, 178, 0.15)'
            }}>
              Get In Touch
            </h2>
            <p className={`text-lg sm:text-xl ${
              isDark 
                ? 'text-gray-300' 
                : 'text-gray-600'
            }`}>
              Feel free to reach out for collaboration or just to say hi!
            </p>
          </div>

          <Card className={`animate-fade-in ${
            isDark 
              ? 'bg-white/5 border-white/10' 
              : 'bg-white border-gray-200'
          }`}>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    className={`h-12 transition-colors ${
                      isDark 
                        ? 'bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-cyan-500'
                    }`}
                    required
                  />
                </div>
                <div>
                  <Input 
                    name="email"
                    type="email" 
                    placeholder="Your Email" 
                    className={`h-12 transition-colors ${
                      isDark 
                        ? 'bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-cyan-500'
                    }`}
                    required
                  />
                </div>
                <div>
                  <Textarea 
                  name="message"
                    placeholder="Your Message" 
                    rows={5}
                    className={`resize-none transition-colors ${
                      isDark 
                        ? 'bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-cyan-500'
                    }`}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 text-base sm:text-lg font-semibold transition-all duration-300 h-12"
                >
                  Send Message
                </Button>
              </form>
              
              <div className="text-center mt-6">
                <p className={`text-sm sm:text-base ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  I usually reply within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className={`py-8 text-center border-t px-4 ${
        isDark 
          ? 'text-gray-400 border-white/10' 
          : 'text-gray-600 border-gray-200'
      }`}>
        <p className="text-sm sm:text-base">&copy; 2024 Alok Kumar. Built with React & TailwindCSS.</p>
      </footer>
    </div>
  );
};

export default Index;