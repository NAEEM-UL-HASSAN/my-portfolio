import { useState, useEffect } from "react";
import {
  Share2,
  User,
  Mail,
  MessageSquare,
  Linkedin,
  Github,
  Facebook,
} from "lucide-react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { WhatsApp } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.warning("All fields are required!", {
        closeOnClick: true,
        style: { fontFamily: "Poppins", color: "black" },
      });
      return;
    }

    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while we send your message",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const form = e.target;
      const formData = new FormData(form);
      formData.append("access_key", "42fde49f-597d-48cb-b26a-492460a6b90e");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
          confirmButtonColor: "#6366f1",
          timer: 2000,
          timerProgressBar: true,
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonColor: "#6366f1",
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      displayName: "Let's Connect",
      subText: "on LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/naeem-hashmi/",
      color: "#0A66C2",
      gradient: "from-[#0A66C2] to-[#0077B5]",
      isPrimary: true,
    },
    {
      name: "GitHub",
      displayName: "Let's Connect",
      subText: "on Github",
      icon: Github,
      url: "https://github.com/NAEEM-UL-HASSAN",
      color: "#ffffff",
      gradient: "from-[#333] to-[#24292e]",
    },
    {
      name: "Facebook",
      displayName: "Let's Connect",
      subText: "on Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/naeemhashmi870",
      color: "#1877F2",
      gradient: "from-[#1877F2] to-[#3b5998]",
    },
    {
      name: "WhatsApp",
      displayName: "Let's Connect",
      subText: "on WhatsApp",
      icon: WhatsApp,
      url: "https://wa.me/+923254280903",
      color: "#25D366",
      gradient: "from-[#075E54] to-[#128C7E]",
    },
  ];

  return (
    <>
      <ToastContainer />
      <div
        id="Contact"
        className="text-center lg:mt-[5%] mt-10 mb-2 px-4 sm:px-6 md:px-8"
      >
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-[#ff8c00]"
        >
          Contact Me
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-200 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Have any questions? Feel free to ask or connect with me!
        </p>
      </div>

      <div className="py-3 flex flex-wrap items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-4 py-8 sm:p-8 transform transition-all duration-300 hover:shadow-[#ff8c00]/10"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-[#ff8c00]">
                  Get in Touch
                </h2>
              </div>
              <Share2 className="w-8 h-8 text-[#ff8c00]" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative group"
              >
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-200 group-focus-within:text-[#ff8c00] transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-3 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#ff8c00]/70 transition-all duration-300 hover:border-[#ff8c00] disabled:opacity-50"
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="relative group"
              >
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-200 group-focus-within:text-[#ff8c00] transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-3 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#ff8c00]/70 transition-all duration-300 hover:border-[#ff8c00] disabled:opacity-50"
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative group"
              >
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-200 group-focus-within:text-[#ff8c00] transition-colors" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-3 pl-12 resize-none bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#ff8c00]/70 transition-all duration-300 hover:border-[#ff8c00] disabled:opacity-50"
                  rows="4"
                />
              </div>

              <div className="relative group">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 bg-[#ff8c00]/90 rounded-xl text-white disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="flex flex-col space-y-4 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-4 py-8 sm:p-8 transform transition-all duration-300 hover:shadow-[#ff8c00]/10"
          >
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-[#ff8c00]">
              Connect With Me
            </h3>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1"
            >
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-3 rounded-xl space-x-3 bg-gradient-to-r ${social.gradient} w-full`}
                >
                  <social.icon className="w-5 h-5 text-white" />
                  <div>
                    <h5 className="text-white font-semibold text-sm">
                      {social.displayName}
                    </h5>
                    <p className="text-xs text-gray-300">{social.subText}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
